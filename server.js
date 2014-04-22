var express = require('express'),
    fork = require('child_process').fork,
    studentsProvider = require('./providers/students'),
    port = 8000;

var app = express();

app.get('/students', function(req, res){
  studentsProvider.getAll(function (err, students) {
    console.log('Students: \n', students);
    if (err) {
      return res.json(500, { error: 'Failure fetching students' });
    }

    res.json(students);
  });
});


app.listen(port);
console.log("Server listening on port: " + port);

module.exports = exports = app;





























// app.get('/students', function(req, res){
//   studentsProvider.getAll().then(function (students) {
//     console.log('Students: \n', students);
//     res.send(students);
//   }).catch(function (err) {
//     return res.json(500, { error: 'Failure fetching students' });
//   });
// });