"""This program generates random lottery numbers."""
# TODO: Import the randint function from the random module.

from random import randint


def generate_lottery_numbers(value):
    """This function generates four random numbers between
    1 and 64 and prints them to the screen"""
    # TODO: Create an empty list to store the lottery numbers
    lottery_numbers = []
    for i in range(value):
        # Assign a variable to the randint() function
         # TODO: Assign a variable to the randint() function
          # TODO: and pass the range of numbers between 1 and 64.
        number = randint(1, 64)
        # Append the number to the list
        lottery_numbers.append(number)

    # TODO: Use a for loop to generate 5 numbers.
    # TODO: Append the number to the list.

    # TODO: Return the list of lottery numbers.


# Call the function to generate lottery numbers
if __name__ == "__main__":
    # Assign the return value of the function to a variable.
    # Pass a number to  the function to generate random lottery numbers.
    my_numbers = generate_lottery_numbers(5)
    # Print the list of lottery numbers.
    print(f"Lottery numbers: {my_numbers}")
