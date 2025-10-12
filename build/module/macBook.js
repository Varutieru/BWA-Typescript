"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseLaptop_1 = __importDefault(require("./baseLaptop"));
class macBook extends baseLaptop_1.default {
    constructor(type, numeric, touchButton) {
        super("macBook", type, numeric, touchButton);
    }
}
exports.default = macBook;
//# sourceMappingURL=macBook.js.map