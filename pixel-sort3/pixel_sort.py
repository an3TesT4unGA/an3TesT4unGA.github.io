from PIL import Image
import random

def cut_invert_and_flip(image_path, num_cuts=5000):
    with Image.open(image_path) as img:
        # Convert the image to RGB mode
        img = img.convert("RGB")
        
        # Get the size of the image
        width, height = img.size
        
        # Specify the minimum and maximum width and height of the cut
        min_cut_width = 20  # Adjust the minimum width for longer pieces vertically
        max_cut_width = 20  # Adjust the maximum width for longer pieces vertically
        min_cut_height = 20
        max_cut_height = 100
        
        # Iterate through each cut
        for _ in range(num_cuts):
            # Randomly select the width and height of the cut
            cut_width = random.randint(min_cut_width, max_cut_width)
            cut_height = random.randint(min_cut_height, max_cut_height)
            
            # Randomly select the top-left corner of the cut
            left = random.randint(0, width - cut_width)
            top = random.randint(0, height - cut_height)
            
            # Calculate the bottom-right corner of the cut
            right = left + cut_width
            bottom = top + cut_height
            
            # Crop the region from the original image
            region = img.crop((left, top, right, bottom))
            
            # Flip the region vertically
            flipped_region = region.transpose(Image.FLIP_TOP_BOTTOM)
            
            # Invert the colors of the flipped region
            inverted_region = Image.eval(flipped_region, lambda x: 255 - x)
            
            # Paste the inverted region back onto the original image
            img.paste(inverted_region, (left, top))
    
        # Save the modified image
        output_path = "cut_inverted_and_flipped_image.jpg"
        img.save(output_path)
    
    print("Cut, inverted, and flipped image saved as", output_path)

if __name__ == "__main__":
    image_path = "kiegelis.jpeg"
    cut_invert_and_flip(image_path)
