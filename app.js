const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const authroutes = require("./routes/authroutes");
const crudroutes = require("./routes/crudroutes");
const conMongoDB = require("./dbconnection/db");

const app = express();
conMongoDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors({ origin: "https://user-management-system-mafe.onrender.com" }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', authroutes);
app.use('/crud', crudroutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("running"));
