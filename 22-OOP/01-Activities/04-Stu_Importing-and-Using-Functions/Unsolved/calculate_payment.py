"""This program calculates the monthly payment for a car loan."""

# TODO: Import the calculate_monthly_payment function from the car_loan file.

from car_loan import calculate_monthly_payment

# TODO: Prompt the user to enter the price of the car.
price = float(input("Enter the price of the car: "))
# TODO: Convert the price to a floating point number.
#float means decimal number

# TODO: Prompt the user to enter the annual interest rate.
annual_interest_rate = float(input("Enter the annual interest rate: "))
# TODO: Convert the interest rate to a floating point number.


# TODO: Prompt the user to enter the number of months to pay off the loan.
# TODO: Convert the number of months to an integer.
length_of_loan = int(input("Enter the number of months to pay off the loan: "))

# TODO: Call the function and pass the user's input as arguments.
# TODO: Assign the result to a variable.
monthly_payment = calculate_monthly_payment(price, annual_interest_rate, length_of_loan)

# TODO: Print the monthly payment to two decimal places.
print(f"The monthly payment is: {monthly_payment:,.2f}")

