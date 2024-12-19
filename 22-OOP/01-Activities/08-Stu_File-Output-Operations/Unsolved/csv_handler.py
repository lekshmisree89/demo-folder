import csv

# TODO: Create a function that appends data to the end of the book sales data.
def create_csv(file, book_data):
  """Create a CSV file and write the header row and data to it.

    Args:
    file (str): The path to the CSV file.
    book_data (list): The data rows to be written to the CSV file.
    """
    # TODO: Use the with open statement to create a new CSV file.
  with open(file, 'a', encoding='utf-8') as outfile:
    # TODO: Use utf-8 encoding to ensure the data is written correctly.

        # TODO: Create a CSV writer object using the writer() function.
    writer = csv.writer(outfile)
    

        # TODO: Write the new data to the file.
    writer.writerow(book_data)


# TODO: Create a function that reads the book sales data and prints it to the console.




def read_csv(path):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
      path (str): The path to the CSV file to read.

    Returns:
      list: The file contents by row.
    """
    # Open the CSV file using the csv module
    # Use the read mode and encoding='utf-8'.
    # This is the standard encoding for CSV files.
    with open(path, 'r', encoding='utf-8') as file:
        # Create a CSV reader object with the reader() function.
        csv_data = csv.reader(file)
        contents = [row for row in csv_data]

        # Iterate over each row in the CSV file
        for row in csv_data:
            # Print each row from the file.
            print(row)

