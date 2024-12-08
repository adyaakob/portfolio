from PIL import Image
import os

def crop_to_16_9(image_path):
    with Image.open(image_path) as img:
        # Get original dimensions
        width, height = img.size
        
        # Calculate target dimensions for 16:9
        target_ratio = 16/9
        current_ratio = width/height
        
        if current_ratio > target_ratio:
            # Image is too wide
            new_width = int(height * target_ratio)
            left = (width - new_width) // 2
            right = left + new_width
            img = img.crop((left, 0, right, height))
        else:
            # Image is too tall
            new_height = int(width / target_ratio)
            top = (height - new_height) // 2
            bottom = top + new_height
            img = img.crop((0, top, width, bottom))
        
        # Save the cropped image
        img.save(image_path)
        print(f"Cropped {os.path.basename(image_path)} to 16:9")

def main():
    cert_dir = r"C:\Project\48 Portfolio Page Starter\portfolio\public\images\certifications"
    
    # Process all images in the directory
    for filename in os.listdir(cert_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_path = os.path.join(cert_dir, filename)
            try:
                crop_to_16_9(image_path)
            except Exception as e:
                print(f"Error processing {filename}: {str(e)}")

if __name__ == "__main__":
    main()
