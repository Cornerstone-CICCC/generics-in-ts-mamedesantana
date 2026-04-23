"use strict";
// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    items = [];
    push(value) {
        this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log(numberStack.pop());
console.log(numberStack.pop());
const stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
const userStack = new Stack();
userStack.push({ name: "Mamede", age: 29 });
userStack.push({ name: "Ana", age: 25 });
console.log(userStack.pop());
//# sourceMappingURL=ex09.js.map