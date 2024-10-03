INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 80000, 1), ('Lead Engineer', 150000, 2),
       ('Accountant', 120000, 3), ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), ('Ashley', 'Rodriguez', 2, NULL),
       ('Kunal', 'Singh', 3, 2), ('Sarah', 'Lourd', 4, NULL);
