function getFullName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var fullName1 = getFullName('Taras', 'Petrynenko');
var fullName2 = getFullName('Taras');
console.log(fullName1);
console.log(fullName2);
function getDisplayName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Petrynenko'; }
    return 'Display Name: ' + firstName + ' ' + lastName;
}
var fullName3 = getDisplayName('Taras', 'Petrynenko');
var fullName4 = getDisplayName('Taras');
var fullName5 = getDisplayName('Taras', 'undefined');
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
