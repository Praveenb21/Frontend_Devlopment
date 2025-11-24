"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      console.log(`Book Issued: ${this.title}`);
    } else {
      console.log(`Already issued.`);
    }
  }

  returnBook() {
    this.isIssued = false;
    console.log(`Returned: ${this.title}`);
  }
}

const books = [
  new Book("Rich Dad Poor Dad", "Robert", "101"),
  new Book("Atomic Habits", "James Clear", "102"),
  new Book("Lord of Rings", "JRR Tolkien", "103"),
];

console.log("\nAvailable Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book) book.issueBook();
  else console.log("Book not found.");
}

issueByISBN("102");
