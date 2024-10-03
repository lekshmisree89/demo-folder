-- Inserting data into businesses
INSERT INTO managers(name) 
VALUES
('Rita Ivanov'),
('Aaron Kamara'),
('Farahd Mohamed'),
('Amara Marquez');

INSERT INTO locations(name,manager_id) 
VALUES
('Annapolis,MD'1),
('Los Angeles, CA',2),
('Lincoln, NB',3),
('Saskatchewan, CA',4);

INSERT INTO businesses (name,location_id)  
VALUES
('Prosser Lankovitch Products',1),
('Ripley Enterprises',2),
('Gormenghast,Inc.',3),
('Nullhammer Corporation',4);










SELECT * FROM businesses;
SELECT * FROM locations;
SELECT * FROM managers;



SELECT * FROM businesses JOIN locations JOIN managers ON 
businesses.location_id = locations.id AND 
locations.managers_id = managers.id;


