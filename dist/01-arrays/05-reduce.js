const values = [10, 2, 3, 4, 5, 6];
const total = values.reduce((prev, current) => {
    console.log('prev ' + prev + ' current ' + current);
    return prev + current;
}, 0);
console.log(total);
const chars = ['a', 'b', 'c', 'a', 'c', 'a'];
const charsRepeat = chars.reduce((prev, current) => {
    if (prev[current]) {
        prev[current] += 1;
    }
    else {
        prev[current] = 1;
    }
    return prev;
}, {});
console.log(charsRepeat);
const usersList = [
    { name: 'Андрій', role: 'client' },
    { name: 'Степан', role: 'admin' },
    { name: 'Іван', role: 'client' },
    { name: 'Микола', role: 'client' },
];
const res1 = usersList
    .filter(user => user.role === 'client')
    .map(user => user.name);
console.log(res1);
const res2 = usersList.reduce((prev, user) => {
    if (user.role === 'client') {
        prev.push(user.name);
    }
    return prev;
}, []);
console.log(res2);
