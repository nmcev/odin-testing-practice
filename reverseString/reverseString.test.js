const reverseString = require('./reverseString');

test('result is a reversed string', () => {
    expect(reverseString('Hello')).toMatch('olleH');
    expect(reverseString('world')).toMatch('dlrow');
    expect(reverseString('123')).toMatch('321');
    expect(reverseString(42)).toEqual(42);
});
