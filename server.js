const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({test: "hello"})
})


const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Your app is listening on port " + listener.address().port);
});