type Book = {
  title: string
  author: string
  year: number
}

interface Person {
  name: string
}

interface Reader {
  library: Library
  numberOfBooks(): number
}

type ReaderPerson = Person & Reader

class LibraryUser implements ReaderPerson {
  name: string = ""
  library: Library = new Library()

  constructor(name: string) {
    this.name = name
  }

  numberOfBooks(): number {
    return this.library.listBooks().length
  }

  info() {
    return `${this.name} has ${this.numberOfBooks().toString()} books.`
  }
}

class Library {
  private books: Book[] = []

  addBook(book: Book) {
    this.books.push(book)
  }

  listBooks() {
    return this.books
  }
}

const books: Book[] = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
]
const john = new LibraryUser("John")
books.forEach((book) => {
  john.library.addBook(book)
})
console.log(john.info())
