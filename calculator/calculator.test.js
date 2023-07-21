const calculator = require('./calculator');

describe('all tests are below', () => {
    test('Add test', () => {
        expect(calculator.add(4, 5)).toBe(9);
    });

    test('Subtract test', () => {
        expect(calculator.subtract(5, 4)).toBe(1);
    });

    test('Divide test', () => {
        expect(calculator.divide(4, 5)).toBeCloseTo(0.8);
    });

    test('Multiply test', () => {
        expect(calculator.multiply(4, 5)).toBe(20);
    });
});
