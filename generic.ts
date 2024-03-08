const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["Hello", "TypeScript", "coding"];
// const arrayOfStrings: Array<any> = ["Hello", "TypeScript", "coding", 3];

function reverse<T>(array: T[]): T[] {
  // This will allow us to make inputs with different types of arguments
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
