import Asus from "./asus";
import macBook from "./macBook";

let asus = new Asus("Zenbook", true, true);
console.log(Asus);

let macbook = new macBook(2017, false, false);
macbook.a();
macbook.b();
console.log(macBook);