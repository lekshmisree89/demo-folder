# Write your Python code here
# TODO: Ask the user for the name of the product they are purchasing and store
# that in a variable.

product_name = input("What is the name of the product you are purchasing?")

product_price = float(input("What is the price of the "
                            + product_name + "you are purchasing?"))
# TODO: Ask the user the tax rate for the product they are purchas ing, convert
# to a float, store the tax rate in a variable.
tax_rate = float(input("What is the tax rate for the "
                       + product_name + "you are purchasing?"))
# TODO: Calculate the total cost of the purchase, round the total to two
# decimal places, and store in a variable.
total_cost = round(product_price * (1 + tax_rate / 100), 2)
# TODO: Print a summary of the purchase.
print(f"{product_price}{product_name}(s) will cost ${total_cost}")
