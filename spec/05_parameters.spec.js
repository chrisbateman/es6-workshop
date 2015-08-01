var expect = require('expect.js');

describe('Default Values', () => {
  xit('can be triggered when the incoming argument is undefined', () => {

    function test(name = "Mercury") {
      return name;
    }

    expect(test("Aaron"))   .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test(undefined)) .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test())          .to.be(/*ENTER YOUR GUESS HERE*/);

  });

  xit('aren\'t included in arguments', () => {

    function test(name = "Mercury") {
      return arguments.length;
    }

    expect(test("Aaron"))   .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test())          .to.be(/*ENTER YOUR GUESS HERE*/);
    
  });

  xit('can trigger a function call', () => {
    let triggerCount = 0;

    function test(name = getDefault()) {
      return name;
    }

    function getDefault() {
      triggerCount++;
      return 'Mercury';
    }

    expect(triggerCount)    .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test("Aaron"))   .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test())          .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(test(null))      .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(triggerCount)    .to.be(/*ENTER YOUR GUESS HERE*/);

  });

});

describe('Rest Parameters', () => {

  xit('catch non-specified params', () => {

    function resty(first, second, ...others){
      return others;
    }

    expect(resty().length).to.be(/*ENTER YOUR GUESS HERE */);
    expect(resty(1).length).to.be(/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2).length).to.be(/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2,3).length).to.be(/*ENTER YOUR GUESS HERE */);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.be(/*ENTER YOUR GUESS HERE */);

  });

  xit('has a different length than `arguments`', () => {

    function resty(first, second, ...others){
      return others.length == arguments.length;
    }

    expect(resty()).to.be(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1)).to.be(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2).length).to.be(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2,3).length).to.be(/*ENTER YOUR GUESS HERE*/);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.be(/*ENTER YOUR GUESS HERE*/);
  });

  xit('is an actual array, unlike arguments', () => {

    function resty(...args){
      return args;
    }

    function argy(){
      return arguments;
    }

    var args = argy(1,2,3);
    var rests = resty(1,2,3);

    
    expect(args.__proto__ == rests.__proto__) .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(args.splice)                       .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(rests.__proto__)                   .to.be(/*ENTER YOUR GUESS HERE*/);
    expect(rests.splice)                      .not.to.be(undefined);
    expect(rests.splice)                      .to.be(Array.prototype.splice);

  });


  describe('EXTRA CREDIT', ()=>{

    /*
      EXTRA CREDIT
      Comment this back in, and see if you can get it to pass
    */

    xit('it can default all arguments, optionally', () => {

      //Modify the method signature of `myFunction` to allow for all args to be optional

      function myFunction({name, age, favoriteBand}){
        expect(name).not.to.be(undefined);
        expect(age).not.to.be(undefined);
        expect(favoriteBand).not.to.be(undefined);
      }

      myFunction({ name: 'Axel', age: 37, favoriteBand: 'Taylor Swift' });
      myFunction({ name: 'Axel', age: 37 });
      myFunction({ name: 'Axel' });
      myFunction({});
      myFunction();

    });
  })

});