const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})


app.post("/", function (req, res) {
    console.log(req.body)
    res.send("<h1>Thanks for posting</h1>")

})

app.listen(3001, () => {
    console.log("listening on port 3001")
})