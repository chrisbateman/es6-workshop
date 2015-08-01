
var expect = require('expect.js');

function getAddress(){
  return {
    city: "Salt Lake City",
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485
    }
  };
}

function getNumbers(){
  return [1, 2, 3, 4, 5, 6];
}



describe('Destructuring', () => {

  describe('with Objects', () => {

    it('can be used to pull apart objects', () => {

      //Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
      //var address = getAddress();
      //var city = address.city;
      //var state = address.state;
      //var zip = address.zip;
      let {city, state, zip} = getAddress();

      expect(city).to.be("Salt Lake City");
      expect(state).to.be("UT");
      expect(zip).to.be(84115);
    });


    it('sets missing values to undefined', () => {

      //Using destructuring, call `getAddress()` and create an 'address' variable.
      let {address} = getAddress();

      expect(address).to.be(undefined);
    });

    it('can alias destructured variables', () => {

      //Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
      let {city:c, state:s, zip:z} = getAddress();

      expect(c).to.be("Salt Lake City");
      expect(s).to.be("UT");
      expect(z).to.be(84115);
      expect( ()=>console.log(city) ).to.throwError();
      expect( ()=>console.log(state) ).to.throwError();
      expect( ()=>console.log(zip) ).to.throwError();

    });

    it('can destructure nested variables', () => {

      //Using destructuring, call `getAddress()` and create an pull out the nested 'lat' and 'long' variables
      let {coords: {lat, long}} = getAddress();

      expect(lat).to.be(40.776608);
      expect(long).to.be(-111.920485);
      expect(()=> console.log(coords)).to.throwError();

    });

  });

  describe('with Arrays', ()=>{

    it('can be used to pull apart arrays', () =>{

      //Call getNumbers and pull the first value out as `one` and the second as `two`
      let [one, two] = getNumbers();

      expect(one).to.be(1);
      expect(two).to.be(2);

    });

    it('can skip indexes in arrays', () =>{

      //Call getNumbers and pull the first value out as `one` and the third as `three`. Don't pull out the second index. Skip it
      let [one, ,three] = getNumbers();

      expect(one).to.be(1);
      expect(three).to.be(3);
      expect(()=>console.log(two)).to.throwError();

    });

    it('can reach nested arrays', () =>{

      function getNestedNumbers(){
        return [1, 2, [3, 4, [5, 6]]];
      }

      //Call getNestedNumbers and pull the 1 out as `one`, the 3 as `three` and 6 as `sixth`.
      let [one, ,[three, ,[ ,six]]] = getNestedNumbers();

      expect(one).to.be(1);
      expect(three).to.be(3);
      expect(six).to.be(6);

    });

  });

});

//MORE AT http://www.2ality.com/2015/01/es6-destructuring.html