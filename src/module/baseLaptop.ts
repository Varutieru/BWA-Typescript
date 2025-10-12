import ILaptop from "./iLaptop";
import * as keyboard from "./keyboard";
import { b } from "./keyboard";

class BaseLaptop<T> implements ILaptop<T> {
    nama: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(
        name: string, 
        type: T, 
        numeric: boolean, 
        touchButton: boolean
    ) {
        this.nama = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }

    a(): void {
        console.log(keyboard.a());
    }

    b(): void {
        console.log(b());
    }
}

export default BaseLaptop;