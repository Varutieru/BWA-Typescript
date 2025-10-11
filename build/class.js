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
    phone;
    constructor(phone, name, age) {
        super(name, age);
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
}
let admin = new Admin("08190318400", "Steorra", 20);
admin.getName();
admin.getRole();
admin.setName("OOP");
admin.phone;
//# sourceMappingURL=class.js.map