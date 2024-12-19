# Import the functions from the CSV_handler module.
from csv_handler import create_csv, read_csv
from pathlib import Path

# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "book_sales.csv"

# Column headers for the book data
column_data = ['book_title', 'author', 'quantity_sold', 'price']

# Prompt the user to enter new book data
def get_book_data():
    book_title = input("Enter the book title: ")  # The book title is a string
    author = input("Enter the author: ")          # The author is a string
    
    # Quantity is an integer, with error handling for invalid input
    while True:
        try:
            quantity_sold = int(input("Enter the quantity sold: "))
            break
        except ValueError:
            print("Please enter a valid integer for quantity.")

    # Price is a float, with error handling for invalid input
    while True:
        try:
            price = float(input("Enter the price: "))
            break
        except ValueError:
            print("Please enter a valid number for price.")
    
    # Return the data as a list
    return [book_title, author, quantity_sold, price]

# Get new book data from the user
new_book_data = get_book_data()

# Call the function to add new book data to the CSV file
create_csv(file_out_path, new_book_data)

# Read the data from the CSV file to confirm the new data was added
all_books = read_csv(file_out_path)

# Print all book data to the console
read_csv(file_out_path)
