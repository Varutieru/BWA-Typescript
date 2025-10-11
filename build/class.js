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
    setName(value) {
        this.name = value;
    }
    getName = () => {
        return this.name;
    };
}
exports.User = User;
class Admin extends User {
    read = true;
    write = true;
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
}
let admin = new Admin("Steorra", 20);
admin.getName();
admin.getRole();
admin.setName("OOP");
//# sourceMappingURL=class.js.map