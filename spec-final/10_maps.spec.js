var expect = require('chai').expect;

describe('MAPS', () => {

  it('has a set method', ()=>{

    // Create a new map called 'myMap'
    let myMap = new Map();
    
    // add a new entry. Use "name" as the key and "Aaron" as the value
    myMap.set('name', 'Aaron');


    expect(myMap.get("name")).to.equal("Aaron");

  });

  it('can use objects as a key', ()=>{

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    // Create a map called 'myMap'
    let myMap = new Map();
    
    // add a new entry. Use user as the key, and value as the value
    myMap.set(user, value);

    expect(myMap.has(user)).to.equal(true);
    expect(myMap.get(user)).to.equal(value);

  });

  // calls to `map.get` are not working. leave commented out.
  //xit('doesn\'t coerce keys', ()=>{
  //
  //  let myMap = new Map();
  //  myMap.set(1, 'Aaron');
  //  expect(myMap.get('1')).to.equal(false);
  //  myMap.set("1", 'Aaron');
  //  expect(myMap.get('1')).to.equal(true);
  //
  //});

});