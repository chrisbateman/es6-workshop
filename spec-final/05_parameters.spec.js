var expect = require('chai').expect;

describe('Parameters & Spread', () => {
  
  
  describe('Default Values', () => {
    it('can be triggered when the incoming argument is undefined', () => {
  
      function test(name = "Mercury") {
        return name;
      }
  
      //expect(test("Aaron"))   .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test(undefined))          .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test(null)) .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test())      .to.equal(/*ENTER YOUR GUESS HERE*/);
  
      expect(test("Aaron")).to.equal("Aaron");
      expect(test(undefined)).to.equal("Mercury");
      expect(test(null)).to.equal(null);
      expect(test()).to.equal("Mercury");
    });
  
    it('aren\'t included in arguments', () => {
  
      function test(name = "Mercury") {
        return arguments.length;
      }
  
      //expect(test("Aaron"))   .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test(null))          .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test())      .to.equal(/*ENTER YOUR GUESS HERE*/);
  
      expect(test("Aaron")).to.equal(1);
      expect(test(null)).to.equal(1);
      expect(test()).to.equal(0);
    });
  
    it('can trigger a function call', () => {
      let triggerCount = 0;
  
      function test(name = getDefault()) {
        return name;
      }
  
      function getDefault() {
        triggerCount++;
        return 'Mercury';
      }
  
      //expect(triggerCount)    .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test("Aaron"))   .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test())          .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(test(null))      .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(triggerCount)    .to.equal(/*ENTER YOUR GUESS HERE*/);
  
      expect(triggerCount).to.equal(0);
      expect(test("Aaron")).to.equal("Aaron");
      expect(test()).to.equal('Mercury');
      expect(test(undefined)).to.equal("Mercury");
      expect(triggerCount).to.equal(2);
    });
  
  });
  
  describe('Rest Parameters', () => {
  
    it('catch non-specified params', () => {
  
      function resty(first, second, ...others){
        return others;
      }
  
      //expect(resty().length).to.equal(/*ENTER YOUR GUESS HERE */);
      //expect(resty(1).length).to.equal(/*ENTER YOUR GUESS HERE */);
      //expect(resty(1,2).length).to.equal(/*ENTER YOUR GUESS HERE */);
      //expect(resty(1,2,3).length).to.equal(/*ENTER YOUR GUESS HERE */);
      //expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(/*ENTER YOUR GUESS HERE */);
  
      expect(resty().length).to.equal(0);
      expect(resty(1).length).to.equal(0);
      expect(resty(1,2).length).to.equal(0);
      expect(resty(1,2,3).length).to.equal(1);
      expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).to.equal(8);
    });
  
    it('has a different length than `arguments`', () => {
  
      function resty(first, second, ...others){
        return others.length == arguments.length;
      }
  
      //expect(resty()).to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(resty(1)).to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(resty(1,2)).to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(resty(1,2,3)).to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10)).to.equal(/*ENTER YOUR GUESS HERE*/);
      
      expect(resty()).to.equal(true);
      expect(resty(1)).to.equal(false);
      expect(resty(1,2)).to.equal(false);
      expect(resty(1,2,3)).to.equal(false);
      expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10)).to.equal(false);
    });
  
    it('is an actual array, unlike arguments', () => {
  
      function resty(...args){
        return args;
      }
  
      function argy(){
        return arguments;
      }
  
      var args = argy(1,2,3);
      var rests = resty(1,2,3);
  
      
      //expect(args.__proto__ == rests.__proto__) .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(args.splice)                       .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(rests.__proto__)                   .to.equal(/*ENTER YOUR GUESS HERE*/);
      //expect(rests.splice)                      .not.to.equal(undefined);
      //expect(rests.splice)                      .to.equal(Array.prototype.splice);
      
      expect(args.__proto__ == rests.__proto__).to.equal(false);
      expect(args.splice).to.equal(undefined);
      expect(rests.__proto__).to.equal(Array.prototype);
      expect(rests.splice).not.to.equal(undefined);
      expect(rests.splice).to.equal(Array.prototype.splice);
    });
  
  });
  
  
  describe('Spread', () => {
    
    it('can spread an array into arguments', () => {
      const args = [1, 2, 3];
    
      // call myFunction with the spread operator
      myFunction(...args);
  
      function myFunction(a, b, c) {
        expect(a).to.equal(1);
        expect(b).to.equal(2);
        expect(c).to.equal(3);
      }
    });
    
    
    it('can concatenate arrays', () => {
      var arrayA = [1, 2];
      var arrayB = [5, 6];
      
      // modify the result array to add the contents of arrayA and arrayB - in the proper order
      var result = [...arrayA, 3, 4, ...arrayB];
      
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, ]);
    });
    
    
  });
});