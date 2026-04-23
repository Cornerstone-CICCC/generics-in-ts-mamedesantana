"use strict";
// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.
Object.defineProperty(exports, "__esModule", { value: true });
const getFirstElement = (arr) => {
    return arr[0];
};
console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["apple", "banana", "orange"]));
const users = [
    { name: "Mamede", age: 29 },
    { name: "Ana", age: 25 },
];
console.log(getFirstElement(users));
console.log(getFirstElement([]));
//# sourceMappingURL=ex04.js.map