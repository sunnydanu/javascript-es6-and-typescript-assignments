"use strict";
const circle = {
    print: function () {
        console.log("print from circle");
    },
};
const employee = {
    print: function () {
        console.log("print from employee");
    },
};
function printAll(...objectList) {
    objectList.map((obj) => obj.print());
}
printAll(circle, employee);
