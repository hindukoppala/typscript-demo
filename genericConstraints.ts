// The input object MUST contain a name variable
interface Named {
  name: string;
}

// <T extends Named> guarantees the object has a .name property
function sayHello<T extends Named>(person: T): void {
  console.log("Hello, " + person.name);
}

// Valid: This object has a name variable
const user = { name: "Alice", age: 25 };
sayHello(user);

// Invalid: This object does not have a name variable
const car = { model: "Tesla", year: 2024 };
// sayHello(car); // Error: Property 'name' is missing


