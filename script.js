let readButton = document.querySelector(".read-button");
let addBookButton = document.getElementById("add-book");
let dialog = document.querySelector("dialog");
let newBookButton = document.getElementById("new-book-button");
let bookContainer = document.querySelector(".books");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
//   this.info = function () {
//     return title + " by " + author + ", " + pages + " pages, " + read;
//   };
}

// const theHobbit = new Book(
//   "The Hobbit",
//   "J.R.R. Tolkien",
//   "295",
//   "not read yet"
// );
// const theSympathizer = new Book(
//   "The Sympathizer",
//   "Viet Thanh Nguyen",
//   "382",
//   "read"
// );
// const parableOfTheSower = new Book(
//   "Parable of the Sower",
//   "Octavia Butler",
//   "329",
//   "read"
// );
// const rockSprings = new Book(
//   "Rock Springs",
//   "Richard Ford",
//   "235",
//   "not read yet"
// );

// const allAboutEggs = new Book(
    
//         "All About Eggs",
//         "Rachel Khong",
//         "252",
//         "read",
// );

// myLibrary.push(theHobbit, theSympathizer, parableOfTheSower, rockSprings, allAboutEggs);

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
  event.preventDefault();
}

function clear() {
  let newTitle = document.querySelector(".title");
  let newAuthor = document.querySelector(".author");
  let newPages = document.querySelector(".pages");
  let newRead = document.querySelector(".read");
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newRead.checked = false;
}

function addBookCard(){ 
    bookContainer.innerHTML = "";
    myLibrary.forEach((e) =>{
            let newCard = document.createElement("div");
            newCard.className = "book-card";
            newCard.setAttribute("id", myLibrary.length-1);
            let title = document.createElement("h2");
            let author = document.createElement("p");
            let pages = document.createElement("p");
            let read = document.createElement("button")
            let remove = document.createElement("button");
            title.innerHTML = e.title;
            author.innerHTML = "By "+e.author;
            pages.innerHTML = e.pages+" pages";

            // if (e.read === "off"){
            //     e.read.style.backgroundColor = "green";
            //     e.read.innerHTML = "Read";
            // }
            // else if (e.read === "on") {
            //     e.read.style.backgroundColor = "red";
            //     e.read.innerHTML = "unread";
            // }

            read.className = "read-button";
            read.innerHTML = e.read;

            remove.className = "remove-button";
            remove.innerHTML = "Remove";
            newCard.appendChild(title);
            newCard.appendChild(author);
            newCard.appendChild(pages);
            newCard.appendChild(read);
            newCard.appendChild(remove);
            bookContainer.appendChild(newCard);  
            
});
    //console.log(e.)         
    console.log(myLibrary);
    console.log(myLibrary.length-1);
}

function removeBook(){
    //console.log(document.getElementById('email').value);
}

addBookButton.addEventListener("click", () => {
  addBookToLibrary();
    clear();
    addBookCard();
});
