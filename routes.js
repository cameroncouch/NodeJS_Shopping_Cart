"use strict";
const express = require("express");
const cartItems = express.Router();
const pool = require("./pg-connection-pool")

cartItems.get("/cart-items", function(req, res) {
    pool.query("SELECT * FROM ShoppingCart").then(function(result) {
        res.send(result.rows);
    });
});
cartItems.post("/cart-items", function(req, res) {
    pool.query("INSERT INTO ShoppingCart (product, price, quantity) VALUES ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function(result) {
        pool.query("SELECT * FROM ShoppingCart").then(function(result) {
            res.send(result.rows);
        });
    });
});
cartItems.put("/cart-items/:id", function(req, res) {
    pool.query("UPDATE ShoppingCart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(function() {
        pool.query("SELECT * FROM ShoppingCart").then(function(result) {
            res.send(result.rows);
        });
    });
});
cartItems.delete("/cart-items/:id", function(req, res) {
   pool.query("DELETE FROM ShoppingCart WHERE id=$1::int",
   [req.params.id]).then(function() {
    pool.query("SELECT * FROM ShoppingCart").then(function(result) {
        res.send(result.rows);
        });
   });
});
module.exports = cartItems;