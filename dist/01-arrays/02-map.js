const array = [1, 2, 3, 4, 5];
const newArray = array.map((value, index, arr) => {
    return value * value;
});
console.log(array);
console.log(newArray);
