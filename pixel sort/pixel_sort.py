from PIL import Image
import random

def distort_image(image_path):
    # Open the image
    image = Image.open(image_path)
    pixels = image.load()

    # Get image dimensions
    width, height = image.size

    # Randomly manipulate pixels
    for y in range(height):
        for x in range(width):
            # Randomly choose a manipulation type
            manipulation_type = random.choice(["swap", "invert"])

            # Apply manipulation based on type
            if manipulation_type == "swap":
                # Randomly swap pixel values
                rx = random.randint(0, width - 1)
                ry = random.randint(0, height - 1)
                pixels[x, y], pixels[rx, ry] = pixels[rx, ry], pixels[x, y]
            elif manipulation_type == "invert":
                # Invert pixel values
                pixel_value = pixels[x, y]
                inverted_pixel = tuple(255 - value for value in pixel_value)
                pixels[x, y] = inverted_pixel

    # Convert the image to RGB mode
    image_rgb = image.convert("RGB")

    # Save the distorted image as a JPEG file
    output_path = "distorted_image.jpg"
    image_rgb.save(output_path)

    print(f"Distorted image saved as {output_path}")

if __name__ == "__main__":
    image_path = "bolangerie.png"
    distort_image(image_path)
