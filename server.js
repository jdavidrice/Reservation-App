// Dependencies
const express = require("express");
const path = require("path");

// Setting up express app
let app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting arrays
let reserve = [];
let waitlist = [];