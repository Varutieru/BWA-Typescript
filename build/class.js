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
    _email = "";
    static getRoleName = "Admin";
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
    set email(value) {
        if (value.length < 5) {
            this._email = "Email Salah";
        }
        else {
            this._email = value;
        }
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
let admin = Admin.getRoleName;
console.log(admin);
//# sourceMappingURL=class.js.map