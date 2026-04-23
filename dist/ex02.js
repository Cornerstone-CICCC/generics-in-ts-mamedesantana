"use strict";
// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.
Object.defineProperty(exports, "__esModule", { value: true });
const identity = (value) => {
    return value;
};
console.log(identity(42));
console.log(identity("Hello TypeScript"));
console.log(identity(true));
const user = {
    name: "Mamede",
    age: 29,
};
console.log(identity(user));
//# sourceMappingURL=ex02.js.map