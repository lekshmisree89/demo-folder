def place_order(menu):
    """
    Displays a restaurant menu, asks customers for their order, then returns
    their receipt and total price.

    Parameters:
    menu (dictionary): A nested dictionary containing the menu items and their 
                       prices, using the following format:
                        {
                            "Food category": {
                                "Meal": price
                            }
                        }

    Returns:
    order (list): A list of dictionaries containing the menu item name, price,
                  and quantity ordered.
    order_total (float): The total price of the order.
    """
    # Set up order list. Order list will store a list of dictionaries for
    # menu item name, item price, and quantity ordered
    order = []

    # Get the menu items mapped to the menu numbers
    menu_items = get_menu_items_dict(menu)

    # Launch the store and present a greeting to the customer
    print("Welcome to the Generic Take Out Restaurant.")

    place_order = True
    while place_order:
        print_menu_heading()
        
        # Display the menu items
        for item_num, details in menu_items.items():
            print_menu_line(item_num, *details["Item name"].split(" - "), details["Price"])

        # Ask customer to input menu item number
        menu_selection = input("Type menu number: ")

        # Update the order list using the update_order function
        # Send the order list, menu selection, and menu items as arguments
        order = update_order(order, menu_selection, menu_items)

        # Ask the customer if they would like to order anything else
        keep_ordering = input("Would you like to keep ordering? ('N') to quit): ")
        if keep_ordering.lower() == 'n':
            print("Thank you for your order.")
            print("This is what we are preparing for you.")
        
            
            # Calculate the total price for each item in the order
            prices_list = [item["Price"] * item["Quantity"] for item in order]

            # Create an order total from the prices list and round to 2 decimal places
            order_total = round(sum(prices_list), 2)
            
            place_order = False

    return order, order_total


def update_order(order, menu_selection, menu_items):
    """
    Checks if the customer menu selection is valid, then updates the order.

    Parameters:
    order (list): A list of dictionaries containing the menu item name, price,
                  and quantity ordered.
    menu_selection (str): The customer's menu selection.
    menu_items (dictionary): A dictionary containing the menu items and their
                             prices.

    Returns:
    order (list): A list of dictionaries containing the menu item name, price,
                  and quantity ordered (updated as needed).
    """
    # Check if the menu selection is a valid number
    # return  sorry,{input } isn't an option if not

    if not menu_selection.isdigit():
        print (f"Sorry, {menu_selection} was not a menu option.")
        return order



    menu_selection = int(menu_selection)

    if menu_selection not in menu_items:       
        print("Sorry ,that  number isn't an option.")
        return order

    # Store the item name and price
    item_name = menu_items[menu_selection]["Item name"]
    item_price = menu_items[menu_selection]["Price"]

    # Ask for quantity
    quantity = input(f"What quantity of {item_name} would you like ? ")
    if not quantity.isdigit():
        quantity = 1
    else:
        quantity = int(quantity)

    # Add a dictionary with the item name, price, and quantity to the order list
    order.append({
        "Item name": item_name,
        "Price": item_price,
        "Quantity": quantity
    })

    return order


def print_itemized_receipt(receipt):
    """
    Prints an itemized receipt for the customer.

    Parameters:
    receipt (list): A list of dictionaries containing the menu item name, price,
                    and quantity ordered.
    """
    for item in receipt:
        item_name = item["Item name"]
        price = item["Price"]
        quantity = item["Quantity"]
        print_receipt_line(item_name, price, quantity)


# Starter code below - do not modify any of these functions

def print_receipt_line(item_name, price, quantity):
    num_item_spaces = 32 - len(item_name)
    num_price_spaces = 6 - len(str(price))

    item_spaces = " " * num_item_spaces
    price_spaces = " " * num_price_spaces

    print(f"{item_name}{item_spaces}| ${price}{price_spaces}| {quantity}")


def print_receipt_heading():
    print("----------------------------------------------------")
    print("Item name                       | Price  | Quantity")
    print("--------------------------------|--------|----------")


def print_receipt_footer(total_price):
    print("----------------------------------------------------")
    print(f"Total price: ${total_price:.2f}")
    print("----------------------------------------------------")


def print_menu_heading():
    print("--------------------------------------------------")
    print("Item # | Item name                        | Price")
    print("-------|----------------------------------|-------")


def print_menu_line(index, food_category, meal, price):
    num_item_spaces = 32 - len(food_category + meal) - 3
    item_spaces = " " * num_item_spaces
    i_spaces = " " * (6 if index < 10 else 5)
    print(f"{index}{i_spaces}| {food_category} - {meal}{item_spaces} | ${price}")


def get_menu_items_dict(menu):
    menu_items = {}
    i = 1
    for food_category, options in menu.items():
        for meal, price in options.items():
            menu_items[i] = {
                "Item name": food_category + " - " + meal,
                "Price": price
            }
            i += 1
    return menu_items


def get_menu_dictionary():
    meals = {
    
        "Burrito": {
            "Chicken": 4.49,
            "Beef": 5.49,
            "Vegetarian": 3.99
        },

        "Rice Bowl": {
            "Teriyaki Chicken": 9.99,
            "Sweet and Sour Pork": 8.99,
        },

        "Sushi": {
            "California Roll": 7.49,
            "Spicy Tuna Roll": 8.49,

    
        },

        "Noodles": {
            "Pad Thai": 6.99,
            "Lo Mein": 7.99,  
            "Mee Goreng": 8.99,
        },

"Pizza": {
            "Cheese": 8,
            "Pepperoni": 10.99,
            "Vegetarian": 9.99
   
        },
        "Burger": {
            "Chicken": 7.49,
            "Beef": 8.49,
        },
        
    }
    return meals


# Run the program
if __name__ == "__main__":
    meals = get_menu_dictionary()
    receipt, total_price = place_order(meals)

    print("This is what we are preparing for you.\n")
    print_receipt_heading()
    print_itemized_receipt(receipt)
    print_receipt_footer(total_price)
