users = {}

def create_user(names):
    """Create new users from a comma-separated list."""
    # Split the names by comma, strip whitespace, and convert to title case
    names_list = [name.strip().title() for name in names.split(",")]

    for name in names_list:
        if name.isalpha() or all(char.isalpha() or char.isspace() for char in name):
            # Add to users dictionary: key is title-cased name, value is lowercased with underscores
            users[name] = name.lower().replace(" ", "_")
        else:
            print(f"Invalid name: {name}. Names should contain only letters and spaces.")
    
    print("User(s) added successfully.")

def remove_user(name):
    """Remove a user"""
    name = name.strip().title()  # Normalize name format

    if name in users:
        del users[name]
        print(f"{name} removed successfully.")
    else:
        print(f"{name} not found.")

def view_users():
    """View all users"""
    if users:
        for key, value in users.items():
            print(f"{key}: {value}")
    else:
        print("No users found.")

if __name__ == "__main__":
    menu = {
        1: "Add one or more new users",
        2: "Remove a user",
        3: "View all users",
        4: "Exit"
    }

    while True:
        print("\nPlease select an option:")
        for key, value in menu.items():
            print(f"Option {key}: {value}")

        choice = input("Choice: ")

        if not choice.isdigit():
            print("Invalid choice. Please try again.")
            continue

        choice = int(choice)

        if choice in menu:
            if choice == 1:
                print("To enter multiple users, separate the values with a comma.")
                names = input("Enter the name(s): ")

                if all(char.isalpha() or char in ", " for char in names):
                    create_user(names)
                else:
                    print("Invalid name(s). Please enter only alphabetic characters, spaces, and commas.")
            elif choice == 2:
                name = input("Enter the name of the user to remove (or type 'view' to list all users): ")
                if name.lower() == "view":
                    view_users()
                    name = input("Enter the name of the user to remove: ")

                remove_user(name)
            elif choice == 3:
                view_users()
            elif choice == 4:
                print("Exiting the program.")
                break
        else:
            print("Invalid choice. Please try again.")
