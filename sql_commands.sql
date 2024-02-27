CREATE TABLE usuarios(
    username VARCHAR(50),
    password VARCHAR(100),
    phone INT
);

-- SHOW DATABASES;

-- USE dbname

INSERT INTO usuarios(username, password, phone) VALUES(
    "ShaznilMS",
    "Sm030106",
    851935325
);

-- SHOW TABLES;

-- SELECT * FROM dbname

DELETE FROM usuarios WHERE username="ShaznilMS";

UPDATE usuarios SET phone=851935325 WHERE username="Tony";