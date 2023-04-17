const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

// Create a MySQL connection pool
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "sisdb",
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API route to get comments data
app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM comments";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// API route to add admin data
app.post("/api/post", (req, res) => {
    const { project_title, comment, name } = req.body;
    const sqlInsert = "INSERT INTO comments (project_title,comment,name) VALUES (?,?,?)";
    db.query(sqlInsert, [project_title, comment, name], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send("Comment added successfully");
        }
    });
});


app.listen(5010, () => {
    console.log("Server is running on port 5010 (addcomment)");
});
