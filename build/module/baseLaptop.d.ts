import ILaptop from "./iLaptop";
declare class BaseLaptop<T> implements ILaptop<T> {
    nama: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;
    constructor(name: string, type: T, numeric: boolean, touchButton: boolean);
    a(): void;
    b(): void;
}
export default BaseLaptop;
//# sourceMappingURL=baseLaptop.d.ts.map