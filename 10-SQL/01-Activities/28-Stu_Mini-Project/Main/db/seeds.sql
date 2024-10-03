-- Seed movies table
INSERT INTO movies (title, genre, release_year) VALUES
('Inception', 'Sci-Fi', 2010),
('The Dark Knight', 'Action', 2008),
('Interstellar', 'Sci-Fi', 2014);

-- Seed reviews table
INSERT INTO reviews (movie_id, review_text, reviewer_name) VALUES
(1, 'Amazing movie .', 'Alice'),
(2, 'Outstanding performance ', 'Bob'),
(3, 'A stunning masterpiece.', 'Charlie');
