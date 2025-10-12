abstract class Kendaraan {
    abstract wheels: number;

    start(): void {
        console.log("Ngenggg");
    }
}

class Mobil extends Kendaraan {
    wheels: number = 4;
}

class Motor extends Kendaraan {
    wheels: number=2;
}

let mobil = new Mobil();
console.log(mobil.wheels);
mobil.start();

let motor = new Motor();
console.log(motor.wheels);
motor.start();