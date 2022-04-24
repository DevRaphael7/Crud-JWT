# CRUD JWT in Node.js

This Api is a simple API making in Node.js with *JWT(Json Web Token)*, *Unit Test(Jasmine)*, *TypeScript* and *MySql*

## Resources

- TypeScript
- Jasmine with supertest (Teste Unitário)
- MySQL
- Swagger-ui-express and swagger-jsdoc
- jsonwebtoken

## How to Run

    Prerequisites

    - XAMPP or another server is required to run mysql on your machine, the port configuration file is in config/database.config.ts

    - In the file query.sql are all the queries to create the database used in the repository

--------------------------
1) Open your operating system prompt in your project's root folder, and run *NPM INSTALL* to download all necessary dependencies for your project

2) in the prompt execute *NPM RUN START* or *NPM START* to start project.

3) That's it, your project is ready to be used :)

## Scripts

    npm start ==> start project
    npm run teste ==> Execute jasmine to unit test
    npm run connection ==> verify connection with your DATABASE.

These commands you can change in package.json in "scripts"

## Swagger

In the route */swagger* open Swagger documentation of RESTAPI.
