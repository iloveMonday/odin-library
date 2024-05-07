//testing new branch

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
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

newBookButton.addEventListener("click", () => {
  bookModal.style.display = "block";
  document.getElementById("title").focus();
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
  document.getElementById("title").focus();
}

function displayBooks(){ 
    bookContainer.innerHTML = "";
     

for (let i = 0; i < myLibrary.length; i++){
  let newCard = document.createElement("div");
  newCard.className = "book-card";
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let buttons = document.createElement("div")
  buttons.className = "buttons"
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
      read.style.backgroundColor = "yellow";
      read.style.color = "black"
      read.innerHTML = "Read";
  }
  else if (myLibrary[i].read == "Unread") {
      read.style.backgroundColor = "brown";
      read.style.color = "white";
      read.innerHTML = "Unread";
  }

  newCard.appendChild(title);
  newCard.appendChild(author);
  newCard.appendChild(pages);
  buttons.appendChild(read);
  buttons.appendChild(remove);
  newCard.appendChild(buttons)
  bookContainer.appendChild(newCard);  
}

    removeBook();
    toggleRead();
    console.log(myLibrary);
}

function removeBook(){
  let removeButton = document.querySelectorAll(".remove-button");
  removeButton.forEach((e) =>
    e.addEventListener("click", () =>{
      let index = e.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks();
    }));
}

function toggleRead(){
  let readButton = document.querySelectorAll(".read-button");
  readButton.forEach((e) => 
    e.addEventListener("click", () =>{
      let index = e.dataset.index;
      if (myLibrary[index].read == "Read"){
        myLibrary[index].read = "Unread";
      } else if 
      (myLibrary[index].read == "Unread"){
        myLibrary[index].read = "Read";
      }

    displayBooks();
    }));
}



addBookButton.addEventListener("click", () => {
  addBookToLibrary();
  clear();
  displayBooks();
});