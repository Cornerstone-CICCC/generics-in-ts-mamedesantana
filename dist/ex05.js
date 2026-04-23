"use strict";
// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.
Object.defineProperty(exports, "__esModule", { value: true });
const duplicateElements = (arr, n) => {
    const result = [];
    for (const item of arr) {
        for (let i = 0; i < n; i++) {
            result.push(item);
        }
    }
    return result;
};
console.log(duplicateElements([1, 2, 3], 2));
console.log(duplicateElements(["a", "b"], 3));
const users = [
    { name: "Mamede" },
    { name: "Ana" },
];
console.log(duplicateElements(users, 2));
//# sourceMappingURL=ex05.js.map