const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/mysite',{useNewUrlParser:true});

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    country:String,
    subject: String,
  });

const Contact = mongoose.model('Contact', contactSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/",function(req, res){
    res.sendFile( __dirname + "/" + "index.html");
});

app.post("/contact.html", function(req, res){
    req.end(contact)
})

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("<h1>Your Data Submitted Successfully</h1>")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });

    // res.status(200).render('contact.pug');
})


app.listen(4000, function () {
    console.log("Server started on port 4000");
});