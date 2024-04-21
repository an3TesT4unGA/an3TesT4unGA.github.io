from PIL import Image, ImageDraw
import numpy as np

def pixel_sort(image_path, threshold=100, output_path='sorted_image.jpg'):
    try:
        # Open the image
        img = Image.open(image_path)
        
        # Convert image to numpy array
        img_array = np.array(img)
        
        # Convert image to grayscale
        gray_img = img.convert('L')
        
        # Convert grayscale image to numpy array
        gray_array = np.array(gray_img)
        
        # Threshold the grayscale image
        binary_array = (gray_array > threshold) * 255
        
        # Find contours in the binary image
        contours = find_contours(binary_array)
        print("Number of contours found:", len(contours))
        
        # Draw contours on a copy of the original image
        img_with_contours = draw_contours(img_array.copy(), contours)
        
        # Save the image with contours to a file
        img_with_contours.save(output_path)

        print("Image with contours saved at:", output_path)
        return output_path
    except Exception as e:
        print("An error occurred:", e)
        return None

def find_contours(binary_array):
    # Find contours in the binary image
    contours = []
    height, width = binary_array.shape
    visited = set()
    
    for y in range(height):
        for x in range(width):
            if binary_array[y, x] == 255 and (y, x) not in visited:
                contour = []
                stack = [(y, x)]
                
                while stack:
                    ny, nx = stack.pop()
                    contour.append((nx, ny))  # Reversed order for PIL draw function
                    visited.add((ny, nx))
                    
                    for dy, dx in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                        cy, cx = ny + dy, nx + dx
                        if 0 <= cy < height and 0 <= cx < width and (cy, cx) not in visited and binary_array[cy, cx] == 255:
                            stack.append((cy, cx))
                
                contours.append(contour)  # Don't convert contour to tuple
    return contours

def draw_contours(img_array, contours):
    # Draw contours on a copy of the original image array
    img_with_contours = Image.fromarray(img_array)  # Convert to PIL Image
    draw = ImageDraw.Draw(img_with_contours)
    
    for contour in contours:
        draw.line(contour, fill=255, width=1)  # Draw contour
    
    return img_with_contours

# Example usage
input_image_path = 'kiegelis.jpeg'
output_image_path = pixel_sort(input_image_path, threshold=150, output_path='image_with_contours.jpg')  # Adjust threshold value and output path as needed
