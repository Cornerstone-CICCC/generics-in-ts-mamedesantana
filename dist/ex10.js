"use strict";
// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.
Object.defineProperty(exports, "__esModule", { value: true });
const customMap = (arr, mapper) => {
    const result = [];
    for (const item of arr) {
        result.push(mapper(item));
    }
    return result;
};
console.log(customMap([1, 2, 3], (item) => `Number: ${item}`));
console.log(customMap(["apple", "banana", "kiwi"], (item) => item.length));
const users = [
    { name: "Mamede", age: 29 },
    { name: "Ana", age: 25 },
];
console.log(customMap(users, (item) => item.name));
//# sourceMappingURL=ex10.js.map