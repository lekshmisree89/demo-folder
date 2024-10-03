DROP DATABASE IF EXISTS university;
CREATE DATABASE university;

\c university;

-- Creating a students table
-- CREATE TABLE students (
--     student_id INTEGER,
--     student_name VARCHAR(255),
--     course_id INTEGER,
--     course_name VARCHAR(255),
--     course_instructor VARCHAR(255)
-- );

CREATE TABLE students (
    student_id INTEGER,
    student_name VARCHAR(255),

);



-- Creating a students table
CREATE TABLE courses (
    
 id SERIAL PRIMARY KEY,
    course_name VARCHAR(255),
  instructor_id INTEGER
  FOREIGN KEY (instructor_id) 
  REFERENCES instructors(id)
);


CRETAE TABLE instructors (
    id SERIAL PRIMARY KEY,
    instructor_id INTEGER,
   instructor_name INTEGER
);