const open = document.querySelector('#dialog');
const modal = document.querySelector('.modal');
open.addEventListener("click", () => {
modal.showModal();
});

const button = document.querySelector('button');
button.addEventListener('click', addBookToLibrary);

const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here 
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const readStatus = document.querySelector('input[name="readStatus"]:checked').value === 'true';
    const newBook = new Book(author, title, pages, readStatus);
    myLibrary.push(newBook);
    console.log(myLibrary);
}