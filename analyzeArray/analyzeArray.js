function analyzeArray(array) {
    const object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    }
    if (array.length == 0) {
        return object;
    }

    let sum = 0;
    let min = array[0]
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (array[i] < min) {
            min = array[i]
        }
        if (array[i] > max) {
            max = array[i]
        }
    }
    object.average = sum / array.length;
    object.min = min
    object.max = max
    object.length = array.length

    return object;
}
module.exports = analyzeArray;