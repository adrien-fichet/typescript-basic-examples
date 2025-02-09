class Cat {
  name: string = ""

  constructor(name: string) {
    this.name = name
  }

  meow() {
    return `${this.name} says meow!`
  }
}

const riki = new Cat("Riki")

const rikiToJson = JSON.stringify(riki)
console.log(rikiToJson, Bun.hash(rikiToJson))

const rikiFromJson: Cat = JSON.parse(rikiToJson) // plain object to Cat (explicit type annotation)
console.log(rikiFromJson, riki.meow())
