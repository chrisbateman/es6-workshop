var expect = require('chai').expect;

describe('Template Strings', () => {

  it('allows embedded expressions', () => {
     var data = {
       colors: ['red', 'blue']
     };
     
     // create this string using the data object above: "There are X colors. The first color is X."
     var string = `There are ${data.colors.length} colors. The first color is ${data.colors[0]}.`;
     
     expect(string).to.equal('There are 2 colors. The first color is red.');
  });
  
  
  it('allows multiline strings', () => {
      
      // create a multiline string without escaping any newline characters
      var multilineString = `
        first line
        second line
      `;
      
      expect(multilineString).to.equal('\n        first line\n        second line\n      ');
  });

});