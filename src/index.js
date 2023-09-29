//imports

const express = require("express");

const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");

const { PORT } = require("./constants.js");
const routes = require("./router");


// local variables
const app = express();

//configs
handlebarsConfig(app);
expressConfig(app);

//connecting to the DB
dbConnect()
.then(() => console.log("Successfully connected to the DB!"))
.catch(err => console.log("Error while connecting in DB: " + err));

// routing
app.use(routes);

// port listing
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));