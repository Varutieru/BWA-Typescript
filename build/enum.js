"use strict";
// enum
Object.defineProperty(exports, "__esModule", { value: true });
// numeric enums
// enum Months {
//     JAN = 1,
//     FEB = 100,
//     MAR,
//     APR,
//     MAY
// }
// console.log(Months.MAR);
// string enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month.FEB);
//# sourceMappingURL=enum.js.map