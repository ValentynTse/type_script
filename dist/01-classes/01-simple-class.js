class User {
    print() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
const user1 = new User();
user1.firstName = 'Taras';
user1.lastName = 'Petrynenko';
const user2 = new User();
user2.firstName = 'John';
user2.lastName = 'Doe';
user1.print();
user2.print();
console.log(user1);
