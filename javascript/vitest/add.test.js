import {describe, it, expect} from 'vitest';
import {addTrue, addFalse} from '../add.js';

describe('add functions', () => {
    it('should return 5 for 2 + 3', () => {
        expect(addTrue(2, 3)).toBe(5);
    });
    it('should return 5 for 2 + 3', () => {
        expect(addFalse(2, 3)).toBe(5);
    });
});