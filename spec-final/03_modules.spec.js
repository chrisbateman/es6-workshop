//WRITE YOUR IMPORT STATEMENTS HERE
import Mathy from '../common/Mathy';
import myMathy from '../common/Mathy';
import {sqrt, square as mySquare} from '../common/Mathy';
import mocha from 'mocha';


var expect = require('chai').expect;

describe('ES6 Modules', () => {
  it('can import Mathy', () => {

    //I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).not.to.equal(undefined);
    expect(Mathy.square).not.to.equal(undefined);
    expect(Mathy.diag).not.to.equal(undefined);
  });


  it('Can alias the import name', () => {

    //Import Mathy as `myMathy` to get these tests to pass.
    //NOTE: All import statements have to be done at the top of the file

    expect(myMathy).not.to.equal(undefined);
    expect(myMathy.sqrt).to.equal(Mathy.sqrt);
    expect(myMathy.square).to.equal(Mathy.square);
    expect(myMathy.diag).to.equal(Mathy.diag);
  });

  it('can destructure the import, to only retain pieces of the import', () => {

    //Import `sqrt` and `square` from Mathy, but alias `square as mySquare`
    //NOTE: All import statements have to be done at the top of the file

    expect(sqrt).to.equal(Mathy.sqrt);
    expect(mySquare).not.to.equal(undefined);
    expect(mySquare).to.equal(Mathy.square);
  });

  it('can import from my node_modules', () => {

    //import `mocha`
    //NOTE: All import statements have to be done at the top of the file

    expect(mocha).not.to.equal(undefined);
  });
});