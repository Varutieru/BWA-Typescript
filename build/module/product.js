"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asus_1 = __importDefault(require("./asus"));
const macBook_1 = __importDefault(require("./macBook"));
let asus = new asus_1.default("Zenbook", true, true);
console.log(asus_1.default);
let macbook = new macBook_1.default(2017, false, false);
macbook.a();
macbook.b();
console.log(macBook_1.default);
//# sourceMappingURL=product.js.map