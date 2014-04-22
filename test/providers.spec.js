var Q = require('q');
var records = require('../data/records');

var recordsProvider = require('../providers/records');
var studentsProvider = require('../providers/students');

// Todo: Real unit tests

describe("Providers", function () {
  describe('Records Provider', function () {
    describe('getByStudentId([id])', function () {
      it('should return the record I know it has', function () {
        return recordsProvider.getByStudentId(1).then(function (res) {
          expect(res).to.eql(records[0]);
        });
      });
    });
    describe('fetchData()', function () {
      it('should return all data from /data/records.json', function () {
        return recordsProvider.fetchData().then(function (res) {
          expect(res).to.eql(records);
        });
      });
    });
  });

  describe('Students Provider', function () {
    describe('getAll()', function () {
      it('should populate the record field for all students', function () {
        return studentsProvider.getAll().then(function (students) {
          students.forEach(function (student) {
            expect(student.record).to.be.ok;
          });
          expect(students.length).to.be.gte(1);
        });
      });
    });
  });
});

