function identity<T>(value: T): T {
  return value;
}

const hello = identity("hello");
console.log(hello);

const numbers = identity<number[]>([1, 2, 3]);
console.log(numbers);

const person = identity<{ name: string; age: number }>({
  name: "John",
  age: 30
});
console.log(person);

type Cat = {
  name: string;
  age: number;
};

const cat = identity<Cat>({ name: "Riki", age: 4 });
console.log(cat);
