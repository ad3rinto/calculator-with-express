const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})


app.post("/", function (req, res) {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    res.send(`<h1>Adding these two numbers gives ${num1 + num2}</h1>`)

})

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function (req, res) {
    const weight = parseFloat(req.body.weight)
    const height = parseFloat(req.body.height)
    const bmi = Math.round(weight / height ** 2)
    res.send(`<h1>Your BMI calculates as ${bmi}</h1>`)

})



app.listen(3001, () => {
    console.log("listening on port 3001")
})