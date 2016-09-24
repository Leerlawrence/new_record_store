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

  find: function(recordToFind) {
    var foundRecord = _.find(this.records, function(record){
      return record === recordToFind;
    });
    if (typeof foundRecord != "undefined") {
       return true;
    }
  },

  
  affordRecord: function(record){
    if (this.balance >= record.price) {
      return true}
      else 
        {return false}
    },

    remove: function(record) {
      if (this.find(record) === true) {
        var i = this.records.indexOf(record);
        i > -1 ? this.records.splice(i,1) : [];
      }
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
      
     return "Artist: " + record.artist +" Album: " + record.title + "     Price £" + record.price;
    });
  }
} 

module.exports = Store;





























 //spaces= space(20 -record.artist.length);
// return "Artist: " + record.artist.toString() + ".......Album:" + record.title.toString() + ".....Price £" + record.price.toString();

//return "Artist: "  + record.artist + "\n .......Album:" + record.title + "\n .....Price £" + record.price;
//ternary for balance
// }
// return this.balance >= record.price ? true : false;