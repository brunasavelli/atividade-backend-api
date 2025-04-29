CREATE DATABASE herois_db;

\c herois_db

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    criador VARCHAR(50) NOT NULL
);

CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    editora_id INTEGER REFERENCES editoras(id) ON DELETE SET NULL
);

ALTER TABLE herois ADD COLUMN photo TEXT;

INSERT INTO editoras (name, criador) VALUES 
('DC Comics', 'Malcolm Wheeler-Nicholson'),
('Marvel Comics', 'Martin Goodman'),
('Power Rangers', 'Haim Saban');

INSERT INTO herois (name, editora_id) VALUES
('Batman', 1),
('Superman', 1),
('Flash', 1),
('Mulher-Maravilha', 1),
('Homem-Aranha', 2),
('Capitão América', 2),
('Thor', 2),
('Hulk', 2),
('Power Ranger Vermelho', 3),
('Power Ranger Azul', 3),
('Power Ranger Preto', 3),
('Power Ranger Amarelo', 3);