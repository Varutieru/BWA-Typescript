"use strict";
// tipe data pada balikan function
Object.defineProperty(exports, "__esModule", { value: true });
function getName() {
    return "hello, my name is tahsasta";
}
console.log(getName());
function getAge() {
    return 20;
}
function printName() {
    console.log("print name");
}
printName();
/////////////////
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(20, 5);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (first, last = "Siahaan") => {
    return first + " " + last;
};
console.log(fullName("Sasta"));
// optional parameter
const getLetter = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getLetter("A"));
//# sourceMappingURL=function.js.map