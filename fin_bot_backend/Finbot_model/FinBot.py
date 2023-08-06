from nltk_lib import *
from model import NeurNet
import json
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

with open("/Users/neilgrover/Documents/GitFolder/fin_bot_backend/Finbot_model/chat-gpt-intents.json", "r") as infile:

    intents = json.load(infile)

all_words = []
tags = []
x = []

# temp box for x_train data

y = []

# temp box for y_train data

for intent in intents["intents"]:

    tag = intent["tag"]

    tags.append(tag)

    # append all tags into the tags list

    for pattern_sent in intent["patterns"]:

        token_pattern_sent = tokenize(pattern_sent)

        all_words.extend(token_pattern_sent)

        # adding each word individually with extend

        x.append(token_pattern_sent)
        y.append(tag)

all_words = stem_all(word_list = all_words, ignore_words = ["?", "!", "," ,".", "(", ")"])

# stem all words in the all words list and replace

all_words = sorted(set(all_words))

print(all_words)

# only use unique entries
# sort for convenience

tags = sorted(tags)

x_train, y_train = [], []

for (pattern, tag) in zip(x,y):

    bag = bag_words(pattern, all_words)

    x_train.append(bag)

    label = tags.index(tag)

    y_train.append(label)

x_train = numpy.array(x_train)
y_train = numpy.array(y_train)

class ChatDataset(Dataset):

    def __init__(self):

        self.n_samples = len(x_train)
        self.x_data = x_train
        self.y_data = y_train

    def __getitem__(self, index):

        return self.x_data[index], self.y_data[index]
    
    def __len__(self):

        return self.n_samples
    
batch_size = 5

output_size = len(tags)
input_size = len(all_words)

hidden_size = int(2/3*input_size + output_size)

print("Input, output size, hidden size: ", input_size, output_size, hidden_size)

dataset = ChatDataset()

num_epochs = 700

train_loader = DataLoader(dataset=dataset, batch_size = batch_size, shuffle=True, num_workers = 0)


model = NeurNet(input_size, hidden_size, output_size)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

print(device)

# Loss Criterion and Optimizer

loss_crit = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr = 0.001)


for epoch in range(num_epochs):

    for (words, labels) in train_loader:

        words = words.to(device)
        labels = labels.to(device)

        ouputs = model(words)
        loss = loss_crit(ouputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if (epoch+1) % 100 == 0:

        print(f"epoch: {epoch}, loss = {loss.item():.8f}")

data = {

    "mod_state": model.state_dict(),
    "in_size": input_size,
    "out_size": output_size,
    "hid_size": hidden_size,
    "all_words": all_words,
    "tags": tags 
}

FILE = "fin_bot_backend/Finbot_model/dat.pth"

torch.save(data, FILE)

print("All done ;)")