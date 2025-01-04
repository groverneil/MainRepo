import os
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torchvision import datasets, models, transforms
import logging
from PIL import Image
from torchvision.models import densenet121, DenseNet121_Weights
from torch.utils.data import ConcatDataset
from tqdm import tqdm  # For progress bars

# Set up logging
logging.basicConfig(level=logging.INFO)

class CNNmodel:
    def __init__(self, data_dir, num_classes=None):
        self.data_dir = data_dir
        self.num_classes = num_classes or self._get_num_classes()

    def _get_num_classes(self):
        train_dir = os.path.join(self.data_dir, 'train')
        if not os.path.exists(train_dir):
            raise ValueError(f"Training directory '{train_dir}' does not exist.")
        return len(os.listdir(train_dir))

    def build(self):
        model = densenet121(weights=DenseNet121_Weights)
        for param in model.parameters():
            param.requires_grad = False  # Freeze all layers initially
        
        # Modify the final layer for the number of classes
        model.classifier = nn.Sequential(
            nn.Linear(model.classifier.in_features, self.num_classes)
        )
        return model
    
    def prepare_data(self, batch_size=32, target_size=(224, 224)):
        # Define the transformations
        transform = transforms.Compose([
            transforms.Resize(target_size),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # Normalization for pre-trained models
        ])

        # Apply two different transformations to the training dataset
        train_dataset = datasets.ImageFolder(os.path.join(self.data_dir, 'train'), transform=transform)

        # Validation dataset remains the same
        val_dataset = datasets.ImageFolder(os.path.join(self.data_dir, 'val'), transform=transform)

        # test dataset remains the same
        test_dataset = datasets.ImageFolder(os.path.join(self.data_dir, 'test'), transform=transform)

        # DataLoaders
        train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
        val_loader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False)
        test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

        return train_loader, val_loader, test_loader
    
    def train(self, train_loader, val_loader, epochs=10, device='cuda'):
        model = self.build().to(device)
        criterion = nn.CrossEntropyLoss()  # Suitable for multi-class classification
        optimizer = optim.Adam(model.classifier.parameters(), lr=0.0005)  # Only train the final layer

        logging.info("Starting training...")
        for epoch in range(epochs):
            model.train()
            running_loss = 0.0
            correct = 0
            total = 0

            pbar = tqdm(train_loader, desc=f"Epoch {epoch+1}/{epochs}", unit="batch")
            
            for inputs, labels in pbar:
              inputs, labels = inputs.to(device), labels.to(device)
              optimizer.zero_grad()
              outputs = model(inputs)
              loss = criterion(outputs, labels)
              loss.backward()
              optimizer.step()
              
              running_loss += loss.item()
              _, predicted = torch.max(outputs, 1)
              correct += (predicted == labels).sum().item()
              total += labels.size(0)
              
              # Update progress bar with batch metrics
              batch_accuracy = 100 * correct / total
              pbar.set_postfix(loss=loss.item(), batch_acc=batch_accuracy)
            
            epoch_loss = running_loss / len(train_loader)
            epoch_accuracy = 100 * correct / total
            logging.info(f"Epoch {epoch+1}/{epochs} - Loss: {epoch_loss:.4f} - Accuracy: {epoch_accuracy:.2f}%")
            
            self.evaluate(model, val_loader, device)
        
        logging.info("Training completed.")
        return model

    def evaluate(self, model, val_loader, device='cuda', verbose=False):
        model.eval()
        correct = 0
        total = 0

        pbar = tqdm(val_loader, desc="Validation", unit="batch")

        incorrect_dist = {class_idx: 0 for class_idx in range(self.num_classes)}
        
        with torch.no_grad():
            for inputs, labels in pbar:
                inputs, labels = inputs.to(device), labels.to(device)
                outputs = model(inputs)
                _, predicted = torch.max(outputs, 1)
                correct += (predicted == labels).sum().item()
                total += labels.size(0)
                pbar.set_postfix(acc=100 * correct / total)

                if verbose:
                    for i in range(len(predicted)):
                        if predicted[i] != labels[i]:
                            incorrect_dist[labels[i].item()] += 1
        
        val_accuracy = 100 * correct / total
        logging.info(f"Validation Accuracy: {val_accuracy:.2f}%")

        if verbose:
            logging.info("Incorrect predictions distribution:")
            for class_idx, count in incorrect_dist.items():
                logging.info(f"Class {class_idx}: {count} incorrect predictions")

def main():
    # Define paths and parameters
    data_dir = './data'  # Path to your dataset directory
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")  # Use GPU if available

    # Initialize the model wrapper
    model = CNNmodel(data_dir)

    logging.info("Preparing data loaders...")
    train_loader, val_loader, test_loader = model.prepare_data(batch_size=8, target_size=(224, 224))

    logging.info("Training model...")
    trained_model = model.train(train_loader, val_loader, epochs=5, device=device)

    logging.info("Saving model...")
    torch.save(trained_model.state_dict(), 'model.pth')

    logging.info("Loading and evaluating the saved model...")
    # Load the saved weights into a new model instance
    loaded_model = CNNmodel(data_dir).build().to(device)
    loaded_model.load_state_dict(torch.load('model.pth'))
    loaded_model.eval()

    # Evaluate on the test set
    model.evaluate(loaded_model, test_loader, device=device)

if __name__ == "__main__":
    main()
