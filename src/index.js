const express = require('express')
const app = express()
const fs = require('fs');

const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res) => {
    res.send('Hello World');
});
app.post("/add",function (req, res) {
    const body = req.body;
    const final = body.num1 + body.num2;
    if(typeof body.num1 === "string" || typeof body.num2 === "string") {
        res.send({
            status: "error",
            message: "Invalid data types",
            sum: final,
        });
    } else if(final < -1000000 || body.num1<-1000000 || body.num2<-1000000){
        res.send({ status: "error", message: "Underflow", sum: final });
    } else if(final>1000000 ||  body.num1>1000000 || body.num2>1000000) {
        res.send({ status: "error", message: "Overflow", sum: final });
    } else {
        res.send({
            status: res.statusCode == 200 ? "success" : "failure",
            message: "the sum of given two numbers",
            sum: final,
          });
    }
})
app.post("/sub",function (req, res) {
    const body = req.body;
    const final = body.num1 - body.num2;
    if(typeof body.num1 === "string" || typeof body.num2 === "string") {
        res.send({
            status: "error",
            message: "Invalid data types",
            difference: final,
        });
    } else if(final < -1000000 || body.num1<-1000000 || body.num2<-1000000){
        res.send({ status: "error", message: "Underflow", difference: final });
    } else if(final>1000000 ||  body.num1>1000000 || body.num2>1000000) {
        res.send({ status: "error", message: "Overflow", difference: final });
    } else {
        res.send({
            status: res.statusCode == 200 ? "success" : "failure",
            message: "the difference of given two numbers",
            difference: final,
          });
    }
})
app.post("/multiply",function (req, res) {
    const body = req.body;
    const final = body.num1 * body.num2;
    if(typeof body.num1 === "string" || typeof body.num2 === "string") {
        res.send({
            status: "error",
            message: "Invalid data types",
            result: final,
        });
    } else if(final < -1000000 || body.num1<-1000000 || body.num2<-1000000){
        res.send({ status: "error", message: "Underflow", result: final });
    } else if(final>1000000 ||  body.num1>1000000 || body.num2>1000000) {
        res.send({ status: "error", message: "Overflow", result: final });
    } else {
        res.send({
            status: res.statusCode == 200 ? "success" : "failure",
            message: "The product of given numbers",
            result: final,
          });
    }
})
app.post("/divide", function (req, res) {
    const body = req.body;
    const result = body.num1 / body.num2;
    if (typeof body.num1 == "string" || typeof body.num2 == "string") {
      res.send({
        status: "error",
        message: "Invalid data types",
        result: result,
      });
    }else if(body.num2==0){
      res.send({ status: "error", message: "Cannot divide by zero", result: result });
    }
  
     else if (result < -1000000 || body.num1<-1000000 || body.num2<-1000000) {
      res.send({ status: "error", message: "Underflow", result: result });
    } else if (result > 1000000 || body.num1>1000000 || body.num2>1000000) {
      res.send({ status: "error", message: "Overflow", result: result });
    } else {
      res.send({
        status: res.statusCode == 200 ? "success" : "failure",
        message: "The division of given numbers",
        result: result,
      });
    }
  });

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
