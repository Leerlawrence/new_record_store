var _ = require('lodash');

var Collector = function(name) {
  this.name     = name;
  this.records  = [];
  this.balance  = 0;
}

Collector.prototype = {
  add: function(record) {
    this.records.push(record);
  },
  find: function(searchedRecord) {
    var foundRecord = _.find(this.records, function(record){
      return record === searchedRecord;
    });
    if (typeof foundRecord != "undefined") {
     return true;
   }
 },
 remove: function(record) {
  if (this.find(record) === true) {
    var i = this.records.indexOf(record);
    i > -1 ? this.records.splice(i,1) : [];
  }
},
canAffordRecord: function(record){
  return this.balance >= record.price ? true : false;
},
buy: function(record, store){
  if (this.canAffordRecord(record) && store.find(record) === true) {
    this.balance -= record.price;
    store.balance += record.price;
    this.records.push(record);
    store.remove(record);
  } 
}
}



module.exports = Collector;