-- Create the database
DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

-- Connect to the database
\c movie_db;

-- Create the movies table
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year INT
);

-- Create the reviews table
CREATE TABLE reviews (
     id SERIAL PRIMARY KEY,
     movie_id INT
     REFERENCES movies(id) 
     ON DELETE CASCADE,
    review TEXT NOT NULL,
    reviewer_name VARCHAR(100)
);
 