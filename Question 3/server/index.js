const express = require('express');
const server = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});

server.use(express.json());
server.use(cors());

//CREATE
server.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let sql = "INSERT INTO activity (name, cost, category) VALUES (?,?,?)"
    db.query(sql, [name, cost, category], (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        }
    })
});

//READ
server.get("/activity", (req, res) => {

    let sql = "SELECT * FROM activity";
    db.query(sql, (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
            console.log("Succesful")
        }

    })
});


//UPDATE
server.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let sql = "UPDATE activity SET name = ?, cost = ?, category = ? WHERE id = ?";
    db.query(sql, [name, cost, category, id], (err,result) =>{
        if (err) {
            console.log(err);
        }else{

            res.send(result);
        }
    })
});

// DELETE
server.delete("/delete/:index", (req,res) =>{
    const { index } = req.params

    let sql = "DELETE FROM activity WHERE id = ?"
    db.query(sql, [index], (err,result) =>{err ? console.log(err) : res.send(result)})
})
server.listen(3001, () =>
    console.log("Running in the port 3001")
);