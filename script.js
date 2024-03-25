const myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary() {
  // do stuff here 
}

const open = document.querySelector('#dialog');
const modal = document.querySelector('.modal');

open.addEventListener("click", () => {
modal.showModal();
});