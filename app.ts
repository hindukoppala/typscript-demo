// Import named exports and the default export together
import Calculator, { PI, add } from "./MathUtils";

const calc = new Calculator();
console.log(add(10, 5));          // 15
console.log(calc.multiply(4, 2)); // 8
console.log(PI);                  // 3.14159
