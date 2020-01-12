const controller = {};

const pool = require("../database");

controller.list = (req, res) => {
        pool.query("select * from user", (err, result) => {
            if (err) {res.json(err);}
            else{res.render("index", {data: result});}
        });
    };
    
controller.save = async (req, res) => {
    const {name, address, phone} = req.body;
    const newDate = {
        name,
        address,
        phone
    };
    await pool.query('INSERT INTO user set ?', [newDate], (err, rows) => {
        if (err) {res.json(err);}
        else{res.redirect("/");}
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    pool.query("SELECT * FROM user WHERE id = ?", [id], (err, result) => {
        if (err) {res.json(err);}
        else{res.render("update.ejs", {data: result[0]});}
    });
};

controller.update = async (req, res) => {
    const { id } = req.params;
    const {name, address, phone} = req.body;
    const upNewDate = {
        name,
        address,
        phone
    };
    await pool.query('UPDATE user set ? WHERE id = ?', [upNewDate, id], (err, rows) => {
        if (err) {res.json(err);}
        else{res.redirect("/");}
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    pool.query("DELETE FROM user WHERE id = ?", [id], (err, result) => {
        if (err) {res.json(err);}
        else{res.redirect("/");}
    });
};

        module.exports = controller;