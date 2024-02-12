const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myCallback = (value) => {
    const message = value % 2 === 0 ? 'Парне число' : 'Непарне число';
    console.log(value + ' - ' + message);
};
myArray.forEach((value, index, array) => {
    array[index] = value + 1;
});
const myCallbackFunc = (value, index, array) => {
    array[index] = value + 1;
    console.log(value);
};
const letters = ['a', 'b', 'c', 'a', 'c', 'a'];
const repeats = {};
const myCallbackFunction = (letter) => {
    if (repeats[letter]) {
        repeats[letter] += 1;
    }
    else {
        repeats[letter] = 1;
    }
};
letters.forEach(myCallbackFunction);
console.log(repeats);
