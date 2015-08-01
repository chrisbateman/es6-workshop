//WRITE YOUR IMPORT STATEMENTS HERE
import Mathy from '../common/Mathy';
import myMathy from '../common/Mathy';
import mocha from 'mocha';
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy';


var expect = require('expect.js');

describe('ES6 Modules', () => {
  it('can import Mathy', () => {

    //I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).not.to.be(undefined);
    expect(Mathy.square).not.to.be(undefined);
    expect(Mathy.diag).not.to.be(undefined);
  });


  it('Can alias the import name', () => {

    //Import `Mathy as myMathy` to ge these tests to pass.

    expect(myMathy).not.to.be(undefined);
    expect(myMathy.sqrt).to.be(Mathy.sqrt);
    expect(myMathy.square).to.be(Mathy.square);
    expect(myMathy.diag).to.be(Mathy.diag);
  });

  it('can destructure the import, to only retain pieces of the import', () => {

    //Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare

    expect(mySqrt).not.to.be(undefined);
    expect(mySquare).not.to.be(undefined);
    expect(mySqrt).to.be(Mathy.sqrt);
    expect(mySquare).to.be(Mathy.square);
  });

  it('can import from my node_modules', () => {

    //import `mocha`

    expect(mocha).not.to.be(undefined);

  });
});