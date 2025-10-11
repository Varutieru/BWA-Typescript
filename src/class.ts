// export class User {
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

export class User {
    public name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }
}

let user = new User("Sasta", 20);
console.log(user);