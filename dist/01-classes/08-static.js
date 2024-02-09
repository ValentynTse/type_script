console.log(Math.PI);
console.log(Math.random());
class Database {
    constructor() {
        console.log('Викликаємо конструктор');
    }
    static getInstance() {
        return Database.instance;
    }
    getData() {
        console.log('Received data from Database');
    }
    setData() {
        console.log('Data saved to Database');
    }
}
Database.instance = new Database();
const db = Database.getInstance();
db.getData();
db.setData();
const db2 = Database.getInstance();
console.log('db === db2', db === db2);
