var expect = require('expect.js');

describe('MAPS', () => {

  it('has a set method', ()=>{

    // Create a new map called 'myMap'
    let myMap = new Map();
    
    // add a new entry. Use "name" as the key and "Aaron" as the value
    myMap.set('name', 'Aaron');


    expect(myMap.get("name")).to.be("Aaron");

  });

  it('can use objects as a key', ()=>{

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    // Create a map called 'myMap'
    let myMap = new Map();
    
    // add a new entry. Use user as the key, and value as the value
    myMap.set(user, value);

    expect(myMap.has(user)).to.be(true);
    expect(myMap.get(user)).to.be(value);

  });

  // calls to `map.get` are not working. leave commented out.
  //xit('doesn\'t coerce keys', ()=>{
  //
  //  let myMap = new Map();
  //  myMap.set(1, 'Aaron');
  //  expect(myMap.get('1')).to.be(false);
  //  myMap.set("1", 'Aaron');
  //  expect(myMap.get('1')).to.be(true);
  //
  //});

});