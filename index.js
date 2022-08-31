require("dotenv").config();

const connection = require("./db");
const express = require("express");
const passwordReset = require("./routes/passwordReset");
const users = require("./routes/users");
const app = express();

connection();

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));