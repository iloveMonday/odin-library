let readButton = document.querySelector(".read-button");
let addBookButton = document.getElementById("add-book");
let dialog = document.querySelector("dialog");
let newBookButton = document.getElementById("new-book-button");

const myLibrary = [
  {
    title: "All About Eggs",
    author: "Rachel Khong",
    pages: "252",
    read: "read",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);
const theSympathizer = new Book(
  "The Sympathizer",
  "Viet Thanh Nguyen",
  "382",
  "read"
);
const parableOfTheSower = new Book(
  "Parable of the Sower",
  "Octavia Butler",
  "329",
  "read"
);
const rockSprings = new Book(
  "Rock Springs",
  "Richard Ford",
  "235",
  "not read yet"
);

myLibrary.push(theHobbit, theSympathizer, parableOfTheSower, rockSprings);

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});


function addBookToLibrary() {
  let newTitle = document.querySelector(".title").value;
  let newAuthor = document.querySelector(".author").value;
  let newPages = document.querySelector(".pages").value;
  let newRead = document.querySelector(".read").value;

  let newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  console.log(myLibrary);
  event.preventDefault();
}

function clear() {
    let newTitle = document.querySelector(".title");
    newTitle.value = "";
    
}

addBookButton.addEventListener("click", () => {
  addBookToLibrary();
  clear();
});

