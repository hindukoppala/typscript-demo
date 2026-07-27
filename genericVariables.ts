// Define a reusable wrapper type with a generic type parameter <T>
type StorageBox<T> = {
  contents: T;
};

// Use the generic type for a string variable
const textContainer: StorageBox<string> = { 
  contents: "Hello TypeScript" 
};

// Use the exact same generic type for a number variable
const scoreContainer: StorageBox<number> = { 
  contents: 100 
};

console.log(textContainer.contents);
console.log(scoreContainer.contents);
