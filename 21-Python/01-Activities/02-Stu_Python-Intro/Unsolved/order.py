"""This Python script simulates a food ordering system."""


# The following block of code is an example of a function in Python.
# TODO: Describe the function in your own words
# The order function prints a summary of an order including the dish, total
#  cost, and quantity.

def order(food="pizza", price=5.99, tax=6.5, quantity=1):
    """
    Prints a summary of an order including the dish, total cost, and quantity.

    Parameters:
    food (str): The name of the food being ordered.
    price (float): The price of the food.
    tax (float): The tax rate for the order.
    quantity (int): The number of meals being ordered.
    """

    # TODO: Describe the purpose of the following line of code
    # The total cost of the order is calculated by multiplying the
    # price of the food by the quantity of the order and adding the tax.
    # The total is rounded to two decimal places.
    total = round(price * quantity * (1 + tax / 100), 2)

    # TODO: Describe the purpose of the following line of code
    # The order summary is printed to the console.
    # f-string is used to format the output.
    print(f"{quantity} order(s) of {food} will cost ${total}")


# TODO: Describe the purpose of the following line of code
# The following block of code is executed when the script is run.
if __name__ == "__main__":
    # if __name__ == "__main__": is a special Python variable that gets set to
    #  the name of the script when it is executed.
    # TODO: Describe the purpose of the following line of code
    # The order_options dictionary contains the available dishes and their
    # prices.
    # The keys are the names of the dishes, and the values are the prices.
    #  dictionary similiar to object in js,no methods just key value pairs
    order_options = {
        "pizza": 5.99,
        "pasta": 6.99,
        "salad": 5.49,
        "soup": 3.99
    }

    # TODO: Describe the purpose of the following line of code
    # The while loop allows the user to continue ordering dishes until they
    # choose to stop.
    while True:
        # boolean value of True is always true, so the loop will run until
        # the user chooses to stop, T is uppercase
        # TODO: Describe the purpose of the following line of code
        # The user is prompted to enter the name of the dish they would like
        # to order. meal is a variable that stores the user's input.
        meal = input("What would you like to order?\n"
                     + "Choose from the following options:\n"
                     + ", ".join(order_options.keys()) + " ")
        
        # TODO: Describe the purpose of the following line of code
        # The user's input is converted to lowercase.
        if meal in order_options:
            # TODO: Describe the purpose of the following line of code
            # The price of the selected meal is retrieved from the
            # order_options dictionary.
            price = order_options[meal]

            # TODO: Describe the purpose of the following line of code
            # The user is prompted to enter the quantity of the meal they
            # would like to order.
            quantity = input("How many orders of " + meal
                             + " would you like? ")

            # TODO: Describe the purpose of the following line of code
            while not quantity.isdigit():
                # TODO: Describe the purpose of the following line of code
                quantity = input("Please enter a valid number. ")

            # TODO: Describe the purpose of the following line of code
            # The order function is called with the user's input as arguments.
            order(meal, price, quantity=int(quantity))
            
        # TODO: Describe the purpose of the following line of code
        else:
            # TODO: Describe the purpose of the following line of code
            print("Invalid order. Try again.")
            # TODO: Describe the purpose of the following line of code
            continue

        # TODO: Describe the purpose of the following line of code
        continue_ordering = input("Would you like to order another dish? "
                                  + "(y/n) ")

        # TODO: Describe the purpose of the following line of code
        if continue_ordering.lower() != "y":
            # TODO: Describe the purpose of the following line of code
            break
