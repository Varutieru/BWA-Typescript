// tipe data pada balikan function

function getName(): string {
    return "hello, my name is tahsasta"
}

console.log(getName());

function getAge(): number {
    return 20;
}

function printName(): void {
    console.log("print name");
}

printName();

/////////////////

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const result = multiply(20, 5);
console.log(result);