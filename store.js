var _ = require('lodash');

var Store = function(name, city) {
  this.name    = name;
  this.city    = city;
  this.balance = 0;
  this.records = [];
}

Store.prototype = {
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
affordRecord: function(record){
  return this.balance >= record.price ? true : false;
},
buy: function(record, collector){
  if (this.affordRecord(record) && collector.find(record) === true) {
    this.balance -= record.price;
    collector.balance += record.price;
    this.records.push(record);
    collector.remove(record);
  } 
},
sortByName: function() {
  return _.sortBy(this.records, ['artist', 'title']);
},
inventory: function(){
  var sorted = this.sortByName();
  return sorted.map(function(record){
    return record.artist.toString() + "  -  " + record.title.toString() + "  -  £" + record.price.toString();
  });
}
}

module.exports = Store;