"""
This script contains functions that perform calculations related to loans.
"""

def calculate_loan_balance(principal, monthly_payment=0, annual_interest_rate=5.99, years=1):
    """Calculate the balance of a loan after a given number of years.

    Parameters:
    principal (float): The initial loan amount.
    monthly_payment (float): The monthly payment.
    annual_interest_rate (float): The annual interest rate.
    years (int): The number of years.

    Returns:
    float: The balance of the loan after a given number of years.
    """
    # Loop through each year
    for year in range(years):
        # Loop through each month
        for month in range(12):
            # Calculate the updated balance
            principal = principal * (1 + annual_interest_rate / 100 / 12) - monthly_payment
            # Check if the loan balance is negative
            if principal <= 0:
                return 0  # Return 0 if the loan is paid off

    # Round the balance to two decimal places
    return round(principal, 2)# 2 means


# Define the main function
if __name__ == "__main__":
    # Get the loan details from the user
    principal = float(input("Enter the loan amount: "))
    monthly_payment = float(input("Enter the monthly payment: "))

    # todo Calculate the balance of the loan using the default values
    balance = calculate_loan_balance(principal, monthly_payment)

    # Print the balance of the loan after one year
    print(f"The balance of the loan after one year is ${balance}")


    # Get the number of years from the user
    years = int(input("Enter the number of years: "))
    # Calculate the balance of the loan using years as a keyword argument
    balance = calculate_loan_balance(principal, monthly_payment, years=years)
    # Print the balance of the loan after the specified years
    print(f"The balance of the loan after {years} years is ${balance}")

    print("The default interest rate is 5.99%."
          " Calculate the balance of the loan with a different interest rate.")

    # Get the custom interest rate from the user
    interest = float(input("Enter the interest rate: "))

    # Calculate the balance of the loan with the user-defined interest rate
    balance = calculate_loan_balance(principal, monthly_payment, annual_interest_rate=interest)

    # Print the balance of the loan after one year with the custom interest rate
    print(f"The balance of the loan with an interest rate of {interest}% "
          f"after one year is ${balance}")

    # Calculate the balance of the loan using all user inputs
    balance = calculate_loan_balance(principal, monthly_payment, interest, years)

    # Print the balance of the loan with all user-defined inputs
    print(f"The balance of the loan with an interest rate of {interest}% "
          f"after {years} years is ${balance}")
