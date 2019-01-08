// Public Modules
const chai = require('chai');

// Custom Modules
const Bitbucket = require('../index.js');

// Instantiation
const expect = chai.expect;

describe('Constructor Tests', () => {
  describe('Given I create a new instance of Bitbucket with no arguments', () => {
    var bitbucket = new Bitbucket();
    // Assertions
    expect(bitbucket).to.be.ok;
    expect(bitbucket.options).to.be.ok;

    it('should have defaulted apiVersion to 2.0', (done) => {
      // Assertions
      expect(bitbucket.options.apiVersion).to.be.ok;
      expect(bitbucket.options.apiVersion).to.be.a('string');
      expect(bitbucket.options.apiVersion).to.equal('2.0');

      // Acceptance
      done();
    });

    it('should have defaulted debug to false', (done) => {
      // Assertions
      expect(bitbucket.options.debug).to.be.a('boolean');
      expect(bitbucket.options.debug).to.be.false;

      // Acceptance
      done();
    });

    it('should give an error', () => {

    });
  });
});
