const { expect } = require('chai');
const {addTrue, addFalse} = require('../add');

describe('add function', () => { 
    it('should return 5 for 2 + 3', () => { 
        expect(addTrue(2, 3)).to.equal(5);
    });
    it('should return 5 for 2 + 3', () => { 
        expect(addFalse(2, 3)).to.equal(5);
    });
});