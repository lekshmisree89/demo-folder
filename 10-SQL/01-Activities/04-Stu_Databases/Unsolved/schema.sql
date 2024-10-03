-- Write code here or enter directly in PostgreSQL shell --
-- CREATE DATABASE books_db;

-- Create two new databases --
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

-- Use books_db --
\c books_db;


SELECT current_database();