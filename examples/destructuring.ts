enum Color {
  Black,
  White,
  Gray,
}

const cat = {
  name: "Riki",
  age: 4,
  colors: {
    main: Color.Gray,
    secondary: Color.White,
  },
}

const { name, age: catAge } = cat // destructuring with the same name and aliasing
const { colors: { main: mainColor }} = cat // nested destructuring
console.log(`The cat named ${name} is ${catAge} year(s) old and its main color is ${mainColor}.`)

//@ts-expect-error Property 'favoriteFood' does not exist on type
const { favoriteFood = "fish" } = cat // destructuring with a default value
console.log(`Its favorite food is ${favoriteFood}.`)
