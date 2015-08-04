var expect = require('chai').expect;

describe('MAPS', () => {

  xit('has a set method', ()=>{

    // Create a new map called 'myMap'
    
    
    // add a new entry. Use "name" as the key and "Aaron" as the value
    


    expect(myMap.get("name")).to.equal("Aaron");

  });

  xit('can use objects as a key', ()=>{

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    // Create a map called 'myMap'
    
    
    // add a new entry. Use user as the key, and value as the value


    expect(myMap.has(user)).to.equal(true);
    expect(myMap.get(user)).to.equal(value);

  });

});