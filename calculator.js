const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, calculator world</h1>")
})


app.listen(3001, () => {
    console.log("listening on port 3001")
})