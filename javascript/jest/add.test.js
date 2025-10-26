const {addTrue, addFalse} = require('../add');

test('tests addTrue to sum 2 and 3 to be 5', () => { 
    expect(addTrue(2,3)).toBe(5);
});

test('tests addFalse to sum 2 and 3 to be 5', () => { 
    expect(addFalse(2,3)).toBe(5);
});