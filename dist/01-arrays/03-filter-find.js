const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersArray.filter(value => value % 2 === 0);
const usersArray = [
    { name: 'Андрій', role: 'client' },
    { name: 'Степан', role: 'admin' },
    { name: 'Іван', role: 'client' },
    { name: 'Микола', role: 'client' },
];
const user1 = usersArray.filter((user, index) => {
    console.log(index);
    return user.role === 'admin';
});
console.log(user1);
const user2 = usersArray.find((user, index) => {
    console.log(index);
    return user.role === 'admin';
});
console.log(user2);
