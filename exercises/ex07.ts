// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

const filterByType = <T, U>(
  arr: T[],
  type: "string" | "number" | "boolean" | "object"
): U[] => {
  return arr.filter((item) => typeof item === type) as unknown as U[];
};

const mixedArray = [1, "Hello", true, { name: "Mamede" }, 42, "world"];

console.log(filterByType<(string | number | boolean | object), number>(mixedArray, "number"));

console.log(filterByType<(string | number | boolean | object), string>(mixedArray, "string"));

console.log(filterByType<(string | number | boolean | object), boolean>(mixedArray, "boolean"));

console.log(filterByType<(string | number | boolean | object), object>(mixedArray, "object"));
