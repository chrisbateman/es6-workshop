var expect = require('chai').expect;

describe('Parameters & Spread', () => {

  
  describe('Default Values', () => {
    xit('can be triggered when the incoming argument is undefined', () => {
  
      function test(name = "Mercury") {
        return name;
      }
  
      expect(test("Aaron"))   .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test(undefined)) .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test(null))      .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test())          .to.equal(/*ENTER YOUR GUESS HERE*/);
  
    });
  
    xit('aren\'t included in arguments', () => {
  
      function test(name = "Mercury") {
        return arguments.length;
      }
  
      expect(test("Aaron"))   .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test(null))      .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test())          .to.equal(/*ENTER YOUR GUESS HERE*/);
      
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
  
      expect(triggerCount)    .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test("Aaron"))   .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test())          .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(test(null))      .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(triggerCount)    .to.equal(/*ENTER YOUR GUESS HERE*/);
  
    });
  
  });
  
  describe('Rest Parameters', () => {
  
    xit('catch non-specified params', () => {
  
      function resty(first, second, ...others){
        return others;
      }
  
      expect(resty().length).to.equal(/*ENTER YOUR GUESS HERE */);
      expect(resty(1).length).to.equal(/*ENTER YOUR GUESS HERE */);
      expect(resty(1,2).length).to.equal(/*ENTER YOUR GUESS HERE */);
      expect(resty(1,2,3).length).to.equal(/*ENTER YOUR GUESS HERE */);
      expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(/*ENTER YOUR GUESS HERE */);
  
    });
  
    xit('has a different length than `arguments`', () => {
  
      function resty(first, second, ...others){
        return others.length == arguments.length;
      }
  
      expect(resty()).to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(resty(1)).to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(resty(1,2)).to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(resty(1,2,3)).to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10)).to.equal(/*ENTER YOUR GUESS HERE*/);
      
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
  
      
      expect(args.__proto__ == rests.__proto__) .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(args.splice)                       .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(rests.__proto__)                   .to.equal(/*ENTER YOUR GUESS HERE*/);
      expect(rests.splice)                      .not.to.equal(undefined);
      expect(rests.splice)                      .to.equal(Array.prototype.splice);
    });
  
  });
  
  
  describe('Spread', () => {
    
    xit('can spread an array into arguments', () => {
      const args = [1, 2, 3];
  
      // call myFunction with the spread operator
      myFunction();
  
      function myFunction(a, b, c) {
        expect(a).to.equal(1);
        expect(b).to.equal(2);
        expect(c).to.equal(3);
      }
    });
    
    
    xit('can concatenate arrays', () => {
      var arrayA = [1, 2];
      var arrayB = [5, 6];
      
      // modify the result array to add the contents of arrayA and arrayB - in the proper order
      var result = [3, 4];
      
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, ]);
    });
    
    
  });
});