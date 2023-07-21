const analyzeArray = require('./analyzeArray');
describe("analyzeArray function", () => {
    test('should return the correct analysis object for an array', () => {
        const array = [4, 7, 1, 9, 3];
        const result = analyzeArray(array);

        // Check if the returned object has the correct properties and values
        expect(result).toEqual({
            average: 4.8,
            min: 1,
            max: 9,
            length: 5,
        });
    });
    test('should handle an empty array correctly', () => {
        const array = [];
        const result = analyzeArray(array);

        // Check if the returned object has the correct properties and values for an empty array
        expect(result).toEqual({
            average: 0,
            min: 0,
            max: 0,
            length: 0,
        });
    });

    test('should handle an array with a single element correctly', () => {
        const array = [42];
        const result = analyzeArray(array);

        // Check if the returned object has the correct properties and values for a single-element array
        expect(result).toEqual({
            average: 42,
            min: 42,
            max: 42,
            length: 1,
        });
    });
})