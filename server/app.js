// DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const poolDB = require("./db");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const client_url = process.env.CLIENT_URL;

// MIDDLEWARE
const corsOptions = {
    credentials: true,
    origin: client_url,
};

app.use(cors(corsOptions));

// ROUTES
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Connection Successful" });
});

// COURSES
// GET Courses Operation
app.get("/api/courses", async (req, res) => {
    try {
        const courses = await poolDB.query("SELECT * FROM bayavasfdc.course__c");
        res.status(200).json(courses);
    }
    catch (error) {
        console.error(error.message)
    }
});

// GET Single Course Using ID
app.get("/api/courses/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const course = await poolDB.query("SELECT * FROM bayavasfdc.course__c WHERE id = $1", [id]);
        res.status(200).json(course);
    }
    catch (error) {
        console.error(error.message)
    }
});

// TEACHERS
// GET Teachers Operation
app.get("/api/teachers", async (req, res) => {
    try {
        const teachers = await poolDB.query("SELECT * FROM bayavasfdc.teacher__c");
        res.status(200).json(teachers);
    }
    catch (error) {
        console.error(error.message)
    }
});

// GET Single Teacher Using ID
app.get("/api/teachers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await poolDB.query("SELECT * FROM bayavasfdc.teacher__c WHERE id = $1", [id]);
        res.status(200).json(teacher);

    } catch (error) {
        console.error(error.message)
    }
});

// LISTENER
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});