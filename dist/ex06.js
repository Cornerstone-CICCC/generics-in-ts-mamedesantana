"use strict";
// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.
Object.defineProperty(exports, "__esModule", { value: true });
const createPair = (first, second) => {
    return [first, second];
};
console.log(createPair("Mamede", 29));
console.log(createPair(true, "TypeScript"));
console.log(createPair({ name: "Ana" }, [1, 2, 3]));
//# sourceMappingURL=ex06.js.map