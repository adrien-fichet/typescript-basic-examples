// https://medium.com/@liadshiran92/advanced-console-log-tips-tricks-fa3762930bca
//console.log(console)

const person = { name: "John", age: 30, city: "New York", pets: ["Riki", "Fooki"] }

console.log(person.name, person.age, person.city)
console.dir(person) // nicer output than console.log

console.assert(
  // conditional log
  person.pets.find((pet) => pet === "hamster"),
  "No hamster found!"
)

const countLabel = "Pet"
person.pets.forEach(() => console.count(countLabel)) // labeled counter

console.table(person) // table output

const sleep = async (ms: number) => await new Promise((f) => setTimeout(f, ms))
const timerLabel = "My timer"
console.time(timerLabel) // labeled timer start
await sleep(500)
console.timeLog(timerLabel) // elapsed time
await sleep(500)
console.timeLog(timerLabel)
console.timeEnd(timerLabel) // total elapsed time

const parent = () => {
  const nested = () => {
    console.trace() // print call stack
  }
  nested()
}
parent()

console.warn("This is a warning")
console.error("This is an error")

console.groupCollapsed("Collapsed group") // browser-only
console.log("Hello!")
console.group("nested group")
console.log("World!")
console.groupEnd()
console.groupEnd()

console.log("%c Hello!", "color: cyan; background-color: yellow; font-size: 20px") // stylised-output, browser-only
