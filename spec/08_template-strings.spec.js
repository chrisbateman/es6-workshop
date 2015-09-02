var expect = require('chai').expect;

describe('Template Strings', () => {

  xit('allows embedded expressions', () => {
     var data = {
       colors: ['red', 'blue']
     };
     
     // create this string using the data object above: "There are X colors. The first color is X."
     var string = ``;
     
     expect(string).to.equal('There are 2 colors. The first color is red.');
  });
  
  
  xit('allows multiline strings', () => {
      
      // create a multiline string without escaping any newline characters
      var multilineString = ``;
      
      expect(multilineString).to.equal('\n        first line\n        second line\n      ');
  });

});