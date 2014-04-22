// I could just require in the 
// JSON and make everything sync
// but then I wouldn't have much
// to show, would I?
// 
// var records = require('./data/records');
var util = require('util');
var Q = require('q');
    fs = require('fs');

exports = module.exports = {
  getByStudentId: function (id, callback) {
    this.fetchData(function (err, records) {
      if (err) {
        return callback(err);
      }

      var studentRecord = records.filter(function (record) {
        return record.studentId === parseInt(id);
      })[0];

      callback(null, studentRecord);
    });
  },

  fetchData: function (callback) {
    return fs.readFile('./data/records.json', 'utf8', function (err, data) {
      try {
        data = JSON.parse(data);
      } catch (ex) {
        throw new Error('Invalid JSON.  (Thank you Todd.)');
      }
      callback(null, data);
    });
  }
};
















/*
exports = module.exports = {
  getByStudentId: function (id, callback) {
    return this.fetchData().then(function (records) {
      return records.filter(function (record) {
        return record.studentId === parseInt(id);
      })[0];
    });
  },

  fetchData: function () {
    return Q.ninvoke(fs, 'readFile', './data/records.json', 'utf8')
      .then(JSON.parse)
      .catch(function (err) {
        console.log('ERROR', err);
      });
  }
};
*/