var expect = require('expect.js');

describe('SETS', () => {

  it('has an add method and a has method', ()=>{

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set

    let mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    expect(mySet.has(1)).to.be(true);
    expect(mySet.has(2)).to.be(true);
    expect(mySet.has(3)).to.be(true);
    expect(mySet.has(4)).to.be(false);

  });


  it('doesn`t allow duplicates', ()=>{

    // Create a new Set called 'mySet'
    // add the number 1 to it three times

    let mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(1);

    expect(mySet.has(1)).to.be(true);
    expect(mySet.has(2)).to.be(false);
    expect(mySet.has(3)).to.be(false);
    expect(mySet.has(4)).to.be(false);

  });

});