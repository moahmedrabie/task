const express = require("express");
const mongoose = require("mongoose");

let app = express();

async function connect() {
  let connection = await mongoose.connect("mongodb://0.0.0.0:27017/Students");
  if (!connection) {
    console.log("noo");
  } else {
    console.log("good");
  }
}
connect();
const StudentsSchema = new mongoose.Schema({
  Studentname: String,
  age: Number,
  phone: String,
  Email: String,
  address: String,
 
});

let Studentsmodel = new mongoose.model("Students", StudentsSchema);

const coursesSchema = new mongoose.Schema({
  coursesname: String,
  price: Number,
  code : Number , 
});

let coursesmodel = new mongoose.model("courses", coursesSchema);

let newuser = new Studentsmodel({
  Studentname: " Omar",
  age: "23",
  phone: "01254789452",
  Email: " Omar@gmail.com",
  address: "ismailia",
 
}).save();

let OmarUser = new Studentsmodel({
  Studentname: " Elsayed ",
  age: "22",
  phone: "01687954218",
  Email: " Elsayed@gmail.com",
  address: "Zagazig",
 
}).save();

let Elsayed = new Studentsmodel({
  Studentname: "Ali ",
  age: "23",
  phone: "01128761052",
  Email: "Ali @gmail.com",
  address: "Zagazig",
  
}).save();

let Newunser = new coursesmodel({
  coursesname: "math",
  price: "20 ",
  code : "234" ,

}).save();

let math = new coursesmodel({
  coursesname: "physics",
  price: "30 ",
  code : "345" ,

}).save();


app.get("/Students", async (req, res) => {
  let allStudents = await Studentsmodel.find();
  res.status(200);
  console.log(allStudents.length);
  res.json(allStudents);
});

app.get("/Courses", async (req, res) => {
  let allCourses = await coursesmodel.find();
  res.status(200);
  console.log(allCourses.length);
  res.json(allCourses);
});

app.listen(3000, function () {
  console.log("server now is opend");
});