class DailyReport {
    constructor() {
        this.name = 'Daily Report';
    }
    toJSON() {
        throw new Error("Method not implemented.");
    }
    build() {
        return 'some daili report data';
    }
}
class WeaklyReport {
    constructor() {
        this.name = 'Weakly Report';
    }
    toJSON() {
        throw new Error("Method not implemented.");
    }
    build() {
        return 'some weakly report data';
    }
}
const r1 = new DailyReport();
const r2 = new WeaklyReport();
console.log(r1.build());
console.log(r2.build());
