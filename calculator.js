const express = require("express");

const app = express();

app.get("/", function (req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})


app.listen(3001, () => {
    console.log("listening on port 3001")
})