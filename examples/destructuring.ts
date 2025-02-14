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
const {
  colors: { main: mainColor },
} = cat // nested destructuring
console.log(
  `The cat named ${name} is ${catAge.toString()} year(s) old and its main color is ${mainColor.toString()}.`,
)
