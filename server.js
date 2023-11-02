const express= require('express');
const mongoose= require('mongoose');

let serverapp =express();

//connect server to database(monogo server)

mongoose.connect("mongodb://0.0.0.0:27017/e-learningApp",)
.then(() => console.log('DB now is connected'))
.catch( (err) => {console.error(err); });

// هعمل object من class that called schema (الشكل المبدئي) 
const studentschema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : String,
    address : String,
    age : Number,
    Bio : String,

}); 

// هنا هعمل create to my collection

let studentmodel = new mongoose.model("Student",studentschema);

let userahmed = new studentmodel({
    name : "ahmed",
    email : "ahmed12@gmail.com",
    password : "123444455",
    phone : "010345976103",
    age : 20

}).save();

let userziyad = new studentmodel({
    name : "ziyad",
    email : "ziyad77@gmail.com",
    password : "96743581",
    phone : "01549137320",
    age : 21,
    address : "ismailia"

}).save();
let userali = new studentmodel({
    name : "ali",
    email : "ali55@gmail.com",
    password : "2731.alii",
    phone : "010345976103",
    age : 22,
    Bio : "i'm student in faculty of computers and informatics"

}).save();


const coursesschema = new mongoose.Schema({
    id : String,
    name : String,
    description : String

});

let coursesmodel = new mongoose.model("Courses",coursesschema );

let course1 = new coursesmodel({
    id : "1",
    name : "OODB",
    description : "Dr.Bakry is teaching this course for us."
}).save();

let course2 = new coursesmodel({
    id : "2",
    name : "Web",
    description : "Dr.Bakry is teaching this course for us also ."
    
}).save();



serverapp.get("/Student", async (req, res) => {
    let allstudents = await studentmodel.find();
    res.status(200);
    console.log(allstudents.length);
    res.json(allstudents);
  });
  
  serverapp.get("/Courses", async (req, res) => {
    let allCourses = await coursesmodel.find();
    res.status(200);
    console.log(allCourses.length);
    res.json(allCourses);
  });
  
//   http://localhost:3000/Student
//   http://localhost:3000/Courses


serverapp.listen(3000, function(){

    console.log('server now is opened')
})


/*(err)=> {
    if (!err) console.log('DB now is opened');
    else console.log(err);
}*/

