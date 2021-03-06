var assert = require('assert');
var Store   = require('../store.js');
var Collector = require('../Collector');
var Record  = require('../Record');

var store = new Store("Virgin Megastore", "Oxford St. London");
var collector = new Collector("Lee");
var record_1 = new Record("Josef Lawrence    ", "Christian    ", 10.00);
var record_2 = new Record("Beatles           ", "Abbey Road   ", 12.00);
var record_3 = new Record("Little River Band ", "Greatest Hits", 11.00);
var record_4 = new Record("David Bowie       ", "Aladin sane  ", 12.55);


describe ( '             RECORD STORE', function() {

  beforeEach(function() {
    store.balance = 250;
    store.records = [];
    collector.balance = 120;
    collector.records = [];
    store.add(record_1);
    store.add(record_2);
    store.add(record_3);
  });

  it( 'should be able to create an inventory', function( ){

    console.log("------------------------------------------------");
    console.log("");
    console.log("Inventory for "+store.name +","+store.city) ;
    console.log("================================================" ) ;

    for (i = 0; i < store.inventory().length; i++) { 
      console.log(store.inventory()[i]);
    }
  })

  it('should have a a balance', function() {
    assert(250, store.balance);
    console.log("================================================" ) ;
    console.log("" ) ;
    console.log("There is a balance of £" + store.balance +" in the store")
  })

  it ( 'should be able to add a record', function() {
    store.add(record_1);
    assert(4, store.records.length);
    console.log("Added "+ record_1.title.replace("  ","") + "by "+ record_1.artist)
  })

  it ( 'should be able to remove record', function() {
    store.remove(record_2);
    assert(2, store.records.length);
    console.log("Removed "+ record_2.title.replace("  ","") + "by "+ record_2.artist);

  })

  it ( 'should have records', function() {
    store.add(record_1);
    store.add(record_2);
    store.add(record_3);
    store.add(record_4);
    store.find(record_3);
    assert(true, store.find(record_3));
    console.log("There are " + store.records.length + " records in the store" );
    
  })

  

  it('should be able to afford record', function() {
    assert(true, store.affordRecord(record_1));
    console.log("Store can afford to buy records")
  })


  it('should be able to buy record', function() {
    collector.add(record_1);
    collector.add(record_2);
    store.buy(record_1, collector);
    assert(4, store.records.length);
    assert(240.00, store.balance);
    assert(130.00, collector.balance);
    assert(1, collector.records.length);
    console.log("Store can buy a record from collector")
  })

  
  it('should sort name alphabetically', function() {
    var sorted = store.sortByName()
    assert("Beatles           ", sorted[0].artist );
    assert("Josef Lawrence    ", sorted[1].artist );

    console.log("Stock can be sorted by Artist")
  })
})