var assert  = require('assert');
var Store   = require('../store.js');
var Record  = require('../record.js');
var Collector = require('../collector.js');

var store = new Store("HMV", "Perth");
var collector1 = new Collector("Richard Branson");
var record_1 = new Record("Josef Lawrence", "Wait", 2.50);
var record_2 = new Record("Beatles", "The White Album", 13.00);
var record_3 = new Record("Miley Cyrus", "Some old rubbish", 1.00);


describe ( 'Collector', function() {
  beforeEach( function() { 
    collector1.records = [];
    collector1.balance = 20;
    store.records = [];
    store.balance = 200;
  })

  it ( 'should be able to  add record', function() {
    collector1.add(record_3);
    assert(1, collector1.records.length)
    console.log("------------------------------------------");
    console.log(collector1.name + " added " + record_2.title)
  })

  it ( 'should be able to remove record', function() {
    collector1.add(record_1);
    collector1.add(record_2);
    collector1.remove(record_1);
    assert(1, collector1.records.length);
    console.log(collector1.name + " removed "+ record_1.title)
  })

  it ('should have records', function() {
    assert.deepEqual(0, collector1.records.length);
    console.log(collector1.name + " has records")
  })

  it ( 'should be able to find records', function() {
    collector1.add(record_1);
    collector1.add(record_2);
    collector1.find(record_1);
    assert(true, collector1.find(record_1));
    console.log(collector1.name + " can find records")
  })

  it('should have enough money for record', function() {
    assert(true, collector1.canAffordRecord(record_1));
    console.log(collector1.name + " has money for records")
  })

  it('should be able to buy record', function() {
    store.add(record_1);
    store.add(record_2);
    collector1.buy(record_1, store);
    assert(202.50, store.balance);
    assert(1, store.records.length);

    assert(1, collector1.records.length);
    assert(17.50, collector1.balance);
    console.log(collector1.name + " can buy records");
      })
  

})