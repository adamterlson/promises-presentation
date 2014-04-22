var Q = require('q'),
    fs = require('fs'),
    recordsProvider = require('./records');

var students = require('../data/students');

exports = module.exports = {
  provider: recordsProvider,

  getAll: function (callback) {
    var complete = 0;
    students.forEach(function (student) {
      this.provider.getByStudentId(student.id, function (err, record) {
        student.record = record;
        complete += 1;

        if (complete === students.length) {
          callback(null, students);
        }
      });
    }, this);
  }
};























/*
exports = module.exports = {
  provider: recordsProvider,

  getAll: function () {
    var complete = 0;
    var self = this;

    return Q.all(students.map(function (student) {
      return self.provider.getByStudentId(student.id)
        .then(function (record) {
          student.record = record;
          return student;
        });
    }));
  }
};
 */