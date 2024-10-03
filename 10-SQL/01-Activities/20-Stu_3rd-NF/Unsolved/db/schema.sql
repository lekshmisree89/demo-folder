DROP DATABASE IF EXISTS company;
--DROP TABLE IF EXISTS locations;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
 CREATE TABLE managers(
 id SERIAL PRIMARY KEY,
 name VARCHAR(255)
);

 CREATE TABLE locations (
   id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    manager_id INTEGER,
    FOREIGN KEY (manager_id)
     REFERENCES managers(id)
    ON DELETE SET NULL
    
 );

 CREATE TABLE businesses (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
    location_id INTEGER,
    FOREIGN KEY (location_id) 
    REFERENCES locations(id)
   ON DELETE SET NULL

 );