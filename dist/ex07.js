"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
Object.defineProperty(exports, "__esModule", { value: true });
const filterByType = (arr, type) => {
    return arr.filter((item) => typeof item === type);
};
const mixedArray = [1, "Hello", true, { name: "Mamede" }, 42, "world"];
console.log(filterByType(mixedArray, "number"));
console.log(filterByType(mixedArray, "string"));
console.log(filterByType(mixedArray, "boolean"));
console.log(filterByType(mixedArray, "object"));
//# sourceMappingURL=ex07.js.map