CREATE DATABASE purchases;
\c purchases;

CREATE SCHEMA purchases;

CREATE TABLE IF NOT EXISTS purchases_entity (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR,
    price INTEGER
);

CREATE TABLE IF NOT EXISTS positions_entity (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR,
    price INTEGER
)