// test.js
const capitalize = require('./capitalize');

test('Should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
    expect(capitalize('123')).toBe('123');
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
});