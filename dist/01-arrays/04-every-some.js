const data1 = [1, 2, 3, 4, 5, 6, 100];
const result1 = data1.every(value => value > 10);
console.log(result1);
const data2 = [11, 21, 31, 41, 1];
const result2 = data2.every(value => value > 10);
console.log(result2);
const data3 = [1, 3, 5, 7, 9, 2];
const result3 = data3.some(value => value % 2 === 0);
console.log(result3);
