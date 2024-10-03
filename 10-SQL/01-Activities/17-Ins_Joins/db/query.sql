--SELECT columns (from one or many tables)
--FROM table1
--JOIN table2
--ON table1.column = table2.column;


SELECT course_names.id AS "Course Id", course_names.name AS "COURSENAME", departments.name


SELECT *
FROM course_names JOIN departments ON course_names.department_id = departments.id;
