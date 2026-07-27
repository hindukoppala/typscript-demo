// The function captures whatever type T is passed into it
function copyItem<T>(item: T): T {
  return item;
}

// TypeScript automatically infers T as string
const savedString = copyItem("Sample Text"); 

// TypeScript automatically infers T as number
const savedNumber = copyItem(45); 

console.log(savedString);
console.log(savedNumber);
