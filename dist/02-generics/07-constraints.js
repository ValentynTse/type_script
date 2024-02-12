class SortableList {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    showSorted() {
        let sorted = this.data.sort((a, b) => a.count - b.count);
        console.log(sorted);
    }
}
class OrdersArchive {
    constructor(month, count, totalAmount) {
        this.month = month;
        this.count = count;
        this.totalAmount = totalAmount;
    }
}
const list = new SortableList();
list.add(new OrdersArchive('January', 5, 23400));
list.add(new OrdersArchive('February', 2, 18100));
list.add(new OrdersArchive('March', 10, 22900));
list.showSorted();
