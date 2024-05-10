// DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const poolDB = require("./db");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',    
};

app.use(cors(corsOptions));

// ROUTES
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});