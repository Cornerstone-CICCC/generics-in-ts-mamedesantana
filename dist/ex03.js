"use strict";
// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.
Object.defineProperty(exports, "__esModule", { value: true });
const reverseArray = (arr) => {
    return arr.reverse();
};
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
const users = [
    { name: "Mamede", age: 29 },
    { name: "Ana", age: 25 },
];
console.log(reverseArray(users));
//# sourceMappingURL=ex03.js.map