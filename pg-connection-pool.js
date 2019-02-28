"use strict";
const pg = require("pg");
//building an interface to communicate with our database
const credentials = new pg.Pool({
    user: "postgres",
    password: "password",
    host:"localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});

module.exports = credentials;