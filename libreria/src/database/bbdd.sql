-- Create database
CREATE DATABASE bookstore;

-- Use database
USE bookstore;

-- Create table
CREATE TABLE books (
    code INT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    price DECIMAL(6,2)
);

-- Insert 5 records
INSERT INTO books (code, title, author, price) VALUES
(1, '1984', 'George Orwell', 15.99),
(2, 'To Kill a Mockingbird', 'Harper Lee', 12.50),
(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 10.75),
(4, 'Pride and Prejudice', 'Jane Austen', 9.99),
(5, 'Moby Dick', 'Herman Melville', 14.20);

-- Show data
SELECT * FROM books;