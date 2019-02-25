"use strict";
const express = require("express");
const cartItems = express.Router();
const items = [
    {
        id:"0",
        product:"Apples",
        price:"2",
        quantity:"1"
    },
    {
        id:"1",
        product:"Bananas",
        price:"3",
        quantity:"1"
    },
    {
        id:"2",
        product:"Berries",
        price:"5",
        quantity:"1"
    },
    {
        id:"3",
        product:"Kiwi",
        price:"6",
        quantity:"1"
    }
];
cartItems.get("/cart-items", function(req, res) {
    res.send(items);
    console.log(items);
    console.log("get request made.");
});
cartItems.post("/cart-items", function(req, res) {
    res.send(items);
    console.log(req.body.item);
});
cartItems.put("/cart-items/:id", function(req, res) {
    res.send(items);
    console.log(req.body.item);
    console.log(req.params.id);
});
cartItems.delete("/cart-items/:id", function(req, res) {
    res.send(items);
    console.log(req.params.id);
});
module.exports = cartItems;