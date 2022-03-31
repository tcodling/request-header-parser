const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

// Homepage
app.get("/", (req, res) => {
    res.send("<h1>Request Header Parser</h1><a href='/api/whoami' >See your request metadata</a>")
})

app.get("/api/whoami", (req, res) => {
    res.json({
        ip: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    })
})

module.exports = app