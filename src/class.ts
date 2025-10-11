// export class User {
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

export class User {
    name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone
    }

    getRole(): {read: boolean, write: boolean,} {
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string) {
        this._email = value;
    }

    get email(): string {
        return this._email;
    }
}

let admin = new Admin("08190318400", "Steorra", 20);
admin.getName();
admin.getRole();
admin.setName("OOP");
admin.phone;

admin.email = 'tahsastavaltiel@gmail.com';
console.log(admin.email);