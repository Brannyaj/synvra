from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(filename, text, size=(1200, 800), bg_color=(30, 41, 59), text_color=(255, 255, 255)):
    # Create a new image with the given size and color
    image = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(image)
    
    # Calculate text size and position
    text_width = len(text) * 20  # Approximate width
    text_height = 30
    text_x = (size[0] - text_width) // 2
    text_y = (size[1] - text_height) // 2
    
    # Draw text
    draw.text((text_x, text_y), text, fill=text_color)
    
    # Save the image
    image.save(f'../public/case-studies/{filename}')

# Create case study images
case_studies = [
    ('fintech-analytics.jpg', 'AI-Powered Financial Analytics'),
    ('smart-city.jpg', 'Smart City Infrastructure'),
    ('ecommerce.jpg', 'E-commerce Platform')
]

# Ensure directory exists
os.makedirs('../public/case-studies', exist_ok=True)

# Create images
for filename, text in case_studies:
    create_placeholder_image(filename, text)

print("Created placeholder images for case studies!")
