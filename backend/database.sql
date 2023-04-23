
CREATE TABLE IF NOT EXIST person(
    id SERIAL PRIMARY KEY,
    hename VARCHAR(255),
    surname VARCHAR(255)
);


-- CREATE TABLE users (
--   ID SERIAL PRIMARY KEY,
--   name VARCHAR(30),
--   email VARCHAR(30)

CREATE TABLE bus(
    id SERIAL PRIMARY KEY,
    brand VARCHAR(255),
    model VARCHAR(255),
    garageNumber VARCHAR(255),
    organization VARCHAR(255),
    stateNumber VARCHAR(255),
    parkNumber VARCHAR(255),
    parkName  VARCHAR(255),
    protocol1  VARCHAR(255),
    protocol2  VARCHAR(255),
    protocol3  VARCHAR(255),
    numberDoors VARCHAR(255),
    client INTEGER,
    comment1 VARCHAR(255),
    comment2 VARCHAR(255),
    comment3 VARCHAR(255),
    comment4 VARCHAR(255),
    comment5 VARCHAR(255)
);
