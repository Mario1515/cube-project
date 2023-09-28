//imports

const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constants.js");
const routes = require("./router");

// local variables
const app = express();

//configs
handlebarsConfig(app);
expressConfig(app);

// routing
app.use(routes);

// port listing

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));