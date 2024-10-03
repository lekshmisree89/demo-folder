-- Add your code below and execute file in the PostgreSQL Shell --

--SELECT columns (from one or many tables)
--FROM table1
--JOIN table2
--ON table1.column = table2.column;
SELECT * FROM favorite_books  JOIN book_prices
ON favorite_books.book_price  = book_prices.id;
 
SELECT favorite_books.book_name AS "BOOK NAME", book_prices.price AS "BOOK PRICE"
FROM favorite_books JOIN book_prices ON favorite_books.book_price = book_prices.id;