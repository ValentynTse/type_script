const dataArray1 = [1, 2, 3];
const dataArray2 = [...dataArray1, 100, 200];
console.log(dataArray2);
const point2D = { x: 10, y: 20 };
const point3D = Object.assign(Object.assign({}, point2D), { z: 30 });
console.log(point3D);
