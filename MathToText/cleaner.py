import os
import shutil
from sklearn.model_selection import train_test_split
from PIL import Image
import logging
import os
import shutil
from sklearn.model_selection import train_test_split

def is_image_valid(image_path):
    """Check if the image is valid (not corrupted)."""
    try:
        with Image.open(image_path) as img:
            img.verify()  # Verify the integrity of the image
        return True
    except Exception as e:
        logging.error(f"Invalid image: {image_path}, Error: {e}")
        return False

def split_and_extract_images(src_folder, dst_folder, extensions=None, train_ratio=0.8, val_ratio=0.1):
    """
    Extracts images from src_folder, splits them into train, val, and test sets,
    and saves them in corresponding subdirectories in dst_folder.

    :param src_folder: Root source directory containing images in subfolders.
    :param dst_folder: Root destination directory for split datasets.
    :param extensions: Tuple of allowed file extensions (e.g., ('.jpg', '.png')).
    :param train_ratio: Proportion of data to use for training (default 80%).
    :param val_ratio: Proportion of data to use for validation (default 10%).
    """
    if extensions is None:
        extensions = ('.jpg', '.png', '.jpeg')  # Default allowed extensions

    # Ensure destination folders exist
    for split in ['train', 'val', 'test']:
        os.makedirs(os.path.join(dst_folder, split), exist_ok=True)

    for class_name in os.listdir(src_folder):
        class_path = os.path.join(src_folder, class_name)
        if not os.path.isdir(class_path):
            continue  # Skip non-directory files

        print(f"Processing {class_name}...")
        # Gather all image files in this class
        image_files = []

        for root, _, files in os.walk(class_path):
            for file_name in files:
                if file_name.endswith(extensions):
                    image_files.append(os.path.join(root, file_name))

        print(f"Found {len(image_files)} images")

        # Filter out corrupted images
        image_files = [img for img in image_files if is_image_valid(img)]

        print(f"Found {len(image_files)} valid images")

        # Split into train, val, and test sets
        train_files, temp_files = train_test_split(image_files, test_size=(1 - train_ratio), random_state=42)
        val_files, test_files = train_test_split(temp_files, test_size=(1 - train_ratio - val_ratio) / (1 - train_ratio), random_state=42)

        # Copy files to respective split directories
        for split, file_list in zip(['train', 'val', 'test'], [train_files, val_files, test_files]):
            split_dir = os.path.join(dst_folder, split, class_name)
            os.makedirs(split_dir, exist_ok=True)
            for file_path in file_list:
                shutil.copy(file_path, split_dir)

    print(f"Data split and extraction complete. Files saved in {dst_folder}")

def main():

    folder = "./archive 2/"

    split_and_extract_images(folder, "./data", extensions=('.png'), train_ratio=0.8, val_ratio=0.1)

if __name__ == "__main__":
    main()
