// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.


const safeAccess = <T>(
  obj: T,
  keys: (string | number)[]
): unknown => {
  let result: any = obj;

  for (const key of keys) {
    if (result == null || !(key in result)) {
      return undefined;
    }

    result = result[key];
  }

  return result;
};


const user = {
  name: "Mamede",
  address: {
    city: "Vancouver",
    country: "Canada",
  },
};

console.log(safeAccess(user, ["address", "city"])); 
console.log(safeAccess(user, ["address", "zip"])); 


const data = {
  users: [
    { name: "Ana" },
    { name: "Carlos" },
  ],
};

console.log(safeAccess(data, ["users", 0, "name"])); 
console.log(safeAccess(data, ["users", 1, "name"])); 


const matrix = [[1, 2], [3, 4]];

console.log(safeAccess(matrix, [1, 0])); 
console.log(safeAccess(matrix, [2, 0])); 