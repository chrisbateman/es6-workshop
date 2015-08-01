//WRITE YOUR IMPORT STATEMENTS HERE
import Mathy from '../common/Mathy';



var expect = require('expect.js');

describe('ES6 Modules', () => {
  xit('can import Mathy', () => {

    //I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).not.to.be(undefined);
    expect(Mathy.square).not.to.be(undefined);
    expect(Mathy.diag).not.to.be(undefined);
  });


  xit('Can alias the import name', () => {

    //Import `Mathy as myMathy` to ge these tests to pass.
    //NOTE: All import statements have to be done at the top of the file

    expect(myMathy).not.to.be(undefined);
    expect(myMathy.sqrt).to.be(Mathy.sqrt);
    expect(myMathy.square).to.be(Mathy.square);
    expect(myMathy.diag).to.be(Mathy.diag);
  });

  xit('can destructure the import, to only retain pieces of the import', () => {

    //Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
    //NOTE: All import statements have to be done at the top of the file

    expect(mySqrt).not.to.be(undefined);
    expect(mySquare).not.to.be(undefined);
    expect(mySqrt).to.be(Mathy.sqrt);
    expect(mySquare).to.be(Mathy.square);
  });

  xit('can import from my node_modules', () => {

    //import `lodash`
    //NOTE: All import statements have to be done at the top of the file

    expect(mocha).not.to.be(undefined);

  });
});