import Laptop from "./baseLaptop";

class macBook<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean) {
        super("macBook", type, numeric, touchButton);
    }
}

export default macBook;