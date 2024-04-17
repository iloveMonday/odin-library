let addBookButton = document.getElementById("add-book");
let bookModal = document.getElementById("book-modal");
let close = document.querySelector(".close");
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
//   "Unread"
// );
// const theSympathizer = new Book(
//   "The Sympathizer",
//   "Viet Thanh Nguyen",
//   "382",
//   "Read"
// );
// const parableOfTheSower = new Book(
//   "Parable of the Sower",
//   "Octavia Butler",
//   "329",
//   "Read"
// );
// const rockSprings = new Book(
//   "Rock Springs",
//   "Richard Ford",
//   "235",
//   "Unread"
// );

// const allAboutEggs = new Book(
    
//         "All About Eggs",
//         "Rachel Khong",
//         "252",
//         "Read",
// );

// myLibrary.push(theHobbit, theSympathizer, parableOfTheSower, rockSprings, allAboutEggs);

newBookButton.addEventListener("click", () => {
  bookModal.style.display = "block";
});

close.addEventListener("click", () =>{
    bookModal.style.display = "none";
});

function addBookToLibrary() {
  let newTitle = document.querySelector(".title").value;
  let newAuthor = document.querySelector(".author").value;
  let newPages = document.querySelector(".pages").value;
  let newRead = "";
    let rd = document.getElementById("read");
    let unrd = document.getElementById("unread");
    if (rd.checked==true){
        newRead = "Read";
    }
    else if (unrd.checked==true){
        newRead = "Unread";
    }
  let newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  event.preventDefault();
}

function clear() {
  let newTitle = document.querySelector(".title");
  let newAuthor = document.querySelector(".author");
  let newPages = document.querySelector(".pages");
  let newRead = document.getElementById("read");
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newRead.checked = true;
}

function displayBooks(){ 
    bookContainer.innerHTML = "";
//     myLibrary.forEach((e) =>{
//             let newCard = document.createElement("div");
//             newCard.className = "book-card";
//             let title = document.createElement("h2");
//             let author = document.createElement("p");
//             let pages = document.createElement("p");
//             let read = document.createElement("button")
//             let remove = document.createElement("button");
//             title.innerHTML = e.title;
//             author.innerHTML = "By "+e.author;
//             pages.innerHTML = e.pages+" pages";

//             if (e.read == "Read"){
//                 read.style.backgroundColor = "green";
//                 read.innerHTML = "Read";
//             }
//             else if (e.read == "Unread") {
//                 read.style.backgroundColor = "red";
//                 read.innerHTML = "unread";
//             }

//             // read.className = "read-button"+(e.index);
//             read.innerHTML = e.read;
//             read.className = "read-button";
//             remove.className = "remove-button";
//             remove.innerHTML = "Remove";
//             newCard.setAttribute("data-attribute", e.index);
//             newCard.appendChild(title);
//             newCard.appendChild(author);
//             newCard.appendChild(pages);
//             newCard.appendChild(read);
//             newCard.appendChild(remove);
//             bookContainer.appendChild(newCard);  
// });       

for (let i = 0; i < myLibrary.length; i++){
  let newCard = document.createElement("div");
  newCard.className = "book-card";
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let read = document.createElement("button")
  read.className = "read-button";
  read.setAttribute("data-index", i);
  let remove = document.createElement("button");
  remove.className = "remove-button";
  remove.innerHTML = "Remove";
  remove.setAttribute("data-index", i);

  title.innerHTML = myLibrary[i].title; 
  author.innerHTML = "By "+myLibrary[i].author;
  pages.innerHTML = myLibrary[i].pages+" pages";

  if (myLibrary[i].read == "Read"){
      read.style.backgroundColor = "green";
      read.innerHTML = "Read";
  }
  else if (myLibrary[i].read == "Unread") {
      read.style.backgroundColor = "red";
      read.innerHTML = "Unread";
  }

  newCard.appendChild(title);
  newCard.appendChild(author);
  newCard.appendChild(pages);
  newCard.appendChild(read);
  newCard.appendChild(remove);
  bookContainer.appendChild(newCard);  
}

    removeBook();
    toggleRead();
    console.log(myLibrary);
}

function removeBook(){
  let removeButton = document.querySelectorAll(".remove-button");
  removeButton.forEach((button) =>
    button.addEventListener("click", () =>{
      let index = button.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks();
    }));
}

function toggleRead(){
  let readButton = document.querySelectorAll(".read-button");
  readButton.forEach((e) => 
    e.addEventListener("click", () =>{
      let i = e.dataset.index;
      // if (myLibrary[i].read == "Read"){
      //   myLibrary[i].read == "Unread";
      // } else if 
      // (myLibrary[i].read == "Unread"){
      //   myLibrary[i].read == "Read";
      // }
      console.log(myLibrary[i].index);

    displayBooks();
    }));
}



addBookButton.addEventListener("click", () => {
  addBookToLibrary();
  clear();
  displayBooks();
});