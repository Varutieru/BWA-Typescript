"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    data;
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 2, 3);
numbers.add(4);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());
let random = new List(1, "a", "b", 2);
random.add("tahsasta");
random.add("ganteng");
random.add("the only");
random.add(1);
console.log(random.getAll());
//# sourceMappingURL=genericClass.js.map