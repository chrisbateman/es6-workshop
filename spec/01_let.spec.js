var expect = require('chai').expect;


describe('LET', () => {

  xit('can be used in place of `var`', () => {

    //Declare 'bandName' using 'let'

    //Declare 'isBestBand' using 'let'


    expect(bandName).to.equal("Queen");
    expect(isBestBand).to.equal(true);
  });


  xit('can modify the value of a `let` variable', () => {

    //Delcare 'releaseName' using 'let', setting the value to 'ES6'

    //Change value of 'releaseName' to be `ES2015`, the new name for ES6


    expect(releaseName).to.equal("ES2015");
  });


  xit('is trapped inside of an `if` statement', () => {

    if(true){
      //Change to `var` to `let`, so that 'b' is scoped inside of the if-statement
      var b = 1;
    }

    expect(()=> console.log(b)).to.throwError(new ReferenceError('b is not defined'));
  });


  xit('prevents loop counters from hoisting', () => {

    function doLoop(){
      //Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for(var i = 0; i < 10; i++){

      }
      return i;
    }

    expect(doLoop).to.throwError(new ReferenceError('i is not defined'));
  });


  xit('means that we can start using block statements', () => {

    //BLOCK STATEMENT
    {
      //Change to `let` declaration
      var d = 2;
    }

    expect(()=> console.log('d',d)).to.throwError(new ReferenceError('d is not defined'));
  });

});