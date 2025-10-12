function getData(value: any) {
    return value;
}

console.log(getData("tahsasta").length);
console.log(getData(20));

// generic

function myData<t>(value: t) {
    return value;
}

console.log(myData("tahsasta").length);
console.log(myData(20));

const arrowFunc = <t, >(value: t) => {

}