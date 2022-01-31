-- CREATE DATABASE todo_db

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    todo_name VARCHAR(30) NOT NULL,
    description VARCHAR(200)
);
