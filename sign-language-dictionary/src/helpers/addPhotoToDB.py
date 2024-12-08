import os
import psycopg2 # type: ignore

# Connect to your PostgreSQL database
conn = psycopg2.connect(
    dbname="dictionary",
    user="postgres",
    password="123456",
    host="localhost"
)
cursor = conn.cursor()

# Folder containing the images
image_folder = 'C:/image'

# Function to read image file as binary
def read_image(file_path):
    with open(file_path, 'rb') as file:
        return file.read()

# Loop through each file in the folder and insert into the database
for image_file in os.listdir(image_folder):
    file_path = os.path.join(image_folder, image_file)
    image_data = read_image(file_path)

    cursor.execute("INSERT INTO materials (image) VALUES (%s)", (psycopg2.Binary(image_data),))

# Commit the changes and close the connection
conn.commit()
cursor.close()
conn.close()

print("Images uploaded successfully!")
