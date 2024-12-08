import os
from PIL import Image

def crop_to_16_9(image):
    width, height = image.size
    target_ratio = 16/9
    current_ratio = width/height

    if current_ratio > target_ratio:
        # Image is too wide, crop width
        new_width = int(height * target_ratio)
        left = (width - new_width) // 2
        return image.crop((left, 0, left + new_width, height))
    elif current_ratio < target_ratio:
        # Image is too tall, crop height
        new_height = int(width / target_ratio)
        top = (height - new_height) // 2
        return image.crop((0, top, width, top + new_height))
    return image

def process_images(directory):
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        return

    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            try:
                # Open and process image
                with Image.open(filepath) as img:
                    # Convert to RGB if necessary
                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')
                    
                    # Crop to 16:9
                    cropped = crop_to_16_9(img)
                    
                    # Save as JPG with 60% quality
                    output_filename = os.path.splitext(filepath)[0] + '.jpg'
                    cropped.save(output_filename, 'JPEG', quality=60)
                    print(f"Processed: {filename}")
                    
                    # If the original file wasn't a jpg, remove it
                    if not filename.lower().endswith('.jpg'):
                        os.remove(filepath)
                        print(f"Removed original: {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {str(e)}")

def main():
    base_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    projects_dir = os.path.join(base_path, 'public', 'images', 'projects')
    projects_motion_dir = os.path.join(base_path, 'public', 'images', 'projects-in-motion')
    
    print("Processing project images...")
    process_images(projects_dir)
    
    print("\nProcessing projects-in-motion images...")
    process_images(projects_motion_dir)

if __name__ == "__main__":
    main()
