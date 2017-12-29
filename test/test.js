const expect = require('chai').expect;
const func = require('../index');

describe('shuffle', () => {

  it('should return a new shuffled array', () => {
    let arr = ['cheese','donuts','ham','bacon'];
    let result = func(arr);
    expect(result).to.be.an('array');
    expect(result).to.not.be.undefined;
  });

});
