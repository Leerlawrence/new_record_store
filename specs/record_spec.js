var assert  = require('assert');
var Collector = require('../collector');
var Store   = require('../store');
var Record  = require('../record');

describe ( 'Record', function() {

  it ('should have an artist, title and price', function() {
    record_1 = new Record('John Farnham', 'Sadie the cleaning lady', 0.01);
    assert.deepEqual ('John Farnham', record_1.artist );
    assert.deepEqual ('Sadie the cleaning lady', record_1.title );
    assert.deepEqual (0.01, record_1.price );
    console.log("------------------------------------------")
    console.log("Record has an artist ~  " +record_1.artist);
    console.log("Record has a title   ~  " +record_1.title);
    console.log("Record has a price   ~  " +record_1.price);
  })
})