"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    items = {};
    add(key, value) {
        this.items[String(key)] = value;
    }
    get(key) {
        return this.items[String(key)];
    }
    delete(key) {
        delete this.items[String(key)];
    }
}
const ages = new Dictionary();
ages.add("Mamede", 29);
ages.add("Ana", 25);
console.log(ages.get("Mamede"));
ages.delete("Ana");
console.log(ages.get("Ana"));
const products = new Dictionary();
products.add(1, "Keyboard");
products.add(2, "Mouse");
console.log(products.get(1));
products.delete(2);
console.log(products.get(2));
const users = new Dictionary();
users.add("user1", { name: "Carlos", age: 30 });
console.log(users.get("user1"));
//# sourceMappingURL=ex08.js.map