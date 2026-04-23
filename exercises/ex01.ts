// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

const concatSum = <T extends string | number, U extends string | number>(
a: T,
b: U
): void => {
  if (typeof a !== typeof b) {
    console.log("Error: arguments must be of the same type.");
    return;
  }

  if (typeof a === "string" && typeof b === "string") {
    console.log(a.concat(b));
    return;
  }

  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
    return;
  }

  console.log("Error: arguments must be string or number.");
};
  
concatSum("Hello ", "World");

concatSum(10, 5);

concatSum("10", 5);