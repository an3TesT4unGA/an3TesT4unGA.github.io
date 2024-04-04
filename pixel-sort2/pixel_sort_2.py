from PIL import Image
import numpy as np

def apply_glitch(image_path):
    with Image.open(image_path) as img:
        # Convert image to RGB mode
        img = img.convert("RGB")

        # Convert image to numpy array
        img_array = np.array(img)

        # Apply color channel manipulation (random shift)
        shifted_img = img_array.copy()
        shift_amount = np.random.randint(-60, 60, size=img_array.shape).astype(np.uint8)  # Explicit cast to uint8
        shifted_img += shift_amount

        # Clip the shifted image to ensure values stay within the uint8 range (0-255)
        shifted_img = np.clip(shifted_img, 0, 255)

        # Convert back to image
        shifted_img = Image.fromarray(shifted_img)

        # Save the glitched image
        output_path = "shifted_image.jpg"
        shifted_img.save(output_path)

    print("Glitched image saved as", output_path)

if __name__ == "__main__":
    image_path = "bolangerie.png"
    apply_glitch(image_path)
