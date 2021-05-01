const mongoose = require('mongoose');
const Person = require('./models/Person');
const person = require('./models/Person');

mongoose.connect("mongodb://localhost:27017/personDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const person = new Person({
    name: "Jhon Snow",
    age: "28",
    favoriteFoods: ["BBQ","pizza"],
})

person.save((error) => {
    if(eroor)
    console.log(error);
});

person.create(
    [
        {
            name: "Mark Zuckerbureg",
            age: "30",
            favoriteFoods: ["shawerma", "salade"],
        },
        {
            name: "Ned Stark",
            age: "59",
            favoriteFoods: ["BBQ", "koskos"],
        },
    ],
    
    err => {
        if(err)
        return console.log(err); // saved
    }
);
    
    

Person.find({}, (err, data) => {
    err
        ? console.log("there is and error", err)
        : console.log("this is the data: ", data);
});

Person.findOne({favoriteFoods: "pizza" }, 
    function (err, data) {
    if (err){
        console.log(err)
    }
    else{
        console.log("searching result : ", data);
    }
});

var id = '5ebadc45a99bde77b2efb20e';
User.findById(id, 
    function (err, data) {
        if (err){
        console.log(err);
        }
        else{
        console.log("Result : ", data);
    }
});

var findEditThenSave = function(personId, done) {
    var foodToAdd = 'hamburger';
    Person.findById(personId, function(err, data) {
      data.favoriteFoods.push(foodToAdd);
      data.save();
      if (err) {
        return done(err);
      }
      else {
        done(null, data);
      }
    });
  };

  var findAndUpdate = function(personName, doc) {
    var ageToSet = 20;
    
    Person.findOneAndUpdate(
      {"name": personName},
      {$set: {"age":ageToSet}},
      {new : true},
      function(err,done){
        if(err){
          console.log("Error Ocurred")
        }
        console.log(done)
      }    
  )};

  var user_id = '5eb987e377d884411cac6b69';
User.findByIdAndRemove(user_id, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Removed User : ", docs);
    }
});

User.remove({name: "Mary"}, function (err, result) {
    if (err){
        console.log(err)
    }else{
        console.log("Result :", result) 
    }
});