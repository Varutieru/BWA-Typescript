"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Kendaraan {
    start() {
        console.log("Ngenggg");
    }
}
class Mobil extends Kendaraan {
    wheels = 4;
}
class Motor extends Kendaraan {
    wheels = 2;
}
let mobil = new Mobil();
console.log(mobil.wheels);
mobil.start();
let motor = new Motor();
console.log(motor.wheels);
motor.start();
//# sourceMappingURL=abstractClass.js.map