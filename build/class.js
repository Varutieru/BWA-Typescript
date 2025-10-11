"use strict";
// export class User {
//     public name: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
class User {
    age;
    name;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
exports.User = User;
let user = new User("Sasta", 20);
console.log(user);
//# sourceMappingURL=class.js.map