CREATE database crud_jwt;

CREATE TABLE users (
	name varchar(60) not null,
    password varchar(12) not null,
    email varchar(40) not null,
    id int not null AUTO_INCREMENT,
    PRIMARY KEY(id)
);

CREATE TABLE task(
	id int not null AUTO_INCREMENT,
    name varchar(40) not null,
    description varchar(355) not null,
    date DATE,
    hourCreate TIME,
    userId int not null,
    PRIMARY KEY(id)
);