"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asus {
    name;
    isGaming;
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log('Nyala');
    }
    off() {
        console.log('Mati');
    }
}
class MacBook {
    name;
    keyboardLight;
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log('Nyala');
    }
    off() {
        console.log('Mati');
    }
}
let asus = new Asus("Asus", true);
console.log(asus.on());
console.log(asus.off());
let macbook = new MacBook("MacBook", true);
console.log(macbook.on());
console.log(macbook.off());
//# sourceMappingURL=interface.js.map