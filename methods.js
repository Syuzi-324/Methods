const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let students = [];

app.get ('/students', (req,res) => {
	res.send (students);
})

app.post ('/students', (req,res) => {
	students.push({
		name: req.body.name,
		email: req.body.email,
		age: req.body.age
	});
	res.send('Successfully added');
});

// app.put ('/students/update/:name', (req,res) => {
//  for(let i = 0; i < students.length; i++) {
//  	if(students[i][name] == req.params.name) {
//  		students[i] = {}
//  	}
//  }
// })

app.delete ('/students/:searchBy/:name', (req,res) => {
 for(let i = 0; i < students.length; i++) {
 	
 	if(students[i][req.params.searchBy] == req.params.name) {
 		delete students[i];
 	}
 }
 res.send('Student has been deleted successfully');
})

// app.put ('/students/:searchBy/:name', (req,res) => {
// 	console.log(req.body)
// 	console.log(req.params)
//  for(let i = 0; i < students.length; i++) {

 	
//  	if(students[i][req.params.searchBy] == req.params.name) {
//  		students[i][req.params.name] = 'Jone';
//  	}
//  }
//  res.send('Student name has been changed successfully');
// })


app.listen(3000);