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

    
//     let myArray = myLibrary[i];
//     console.log(myArray.author);
//     console.log(i);
//     const div = document.createElement('div');
//     const p = document.createElement('p');

//     div.setAttribute('id', 'card');
//     container.append(div);
//     div.append(p);
//     p.append(`Author:${myArray.author}<br>Title:${myArray.title}<br> Pagecount:${myArray.pages}<br>${checkRead}`);

// //     for (Book in myLibrary)    {
// //       
// //       const author = document.createElement('p');
// //       author.append(myLibrary.author);
// //       div.append(author);
// //       console.log(`${Book}: ${myLibrary[Book]}`);
// // }
// function checkRead  () {
//   return myArray.read ? 'read' : 'not read yet';
// }
displayBooks();
;
}

function displayBooks() {
  let booksTable = document.getElementById('booksTable');
  if (!booksTable) {
    booksTable = document.createElement('table');
    booksTable.id = 'booksTable';

    const headerRow = document.createElement('tr');
    const authorHeader = document.createElement('th');
    authorHeader.textContent = 'Author';
    headerRow.appendChild(authorHeader);

    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'Title';
    headerRow.appendChild(titleHeader);

    const pagesHeader = document.createElement('th');
    pagesHeader.textContent = 'Pages';
    headerRow.appendChild(pagesHeader);

    const readStatusHeader = document.createElement('th');
    readStatusHeader.textContent = 'Read Status';
    headerRow.appendChild(readStatusHeader);

    const remove = document.createElement('th');
    remove.textContent = 'remove book';
    headerRow.appendChild(remove);

    booksTable.appendChild(headerRow);

    const container = document.getElementById('container');
    container.appendChild(booksTable);
  }

  const newRow = document.createElement('tr');

  const authorCell = document.createElement('td');
  authorCell.textContent = myLibrary[myLibrary.length - 1].author;
  authorCell.dataset.index = myLibrary.length - 1;
  newRow.appendChild(authorCell);

  const titleCell = document.createElement('td');
  titleCell.textContent = myLibrary[myLibrary.length - 1].title;
  titleCell.dataset.index = myLibrary.length - 1;
  newRow.appendChild(titleCell);

  const pagesCell = document.createElement('td');
  pagesCell.textContent = myLibrary[myLibrary.length - 1].pages;
  pagesCell.dataset.index = myLibrary.length - 1;
  newRow.appendChild(pagesCell);

  const readStatusCell = document.createElement('td');
  readStatusCell.textContent = myLibrary[myLibrary.length - 1].read ? 'Read' : 'Not Read';
  readStatusCell.dataset.index = myLibrary.length - 1;
  newRow.appendChild(readStatusCell);

  const removeCell = document.createElement('button');
  removeCell.textContent = 'remove';
  removeCell.dataset.index = myLibrary.length - 1;
  removeCell.addEventListener('click', removeItem);
  newRow.appendChild(removeCell);

  booksTable.appendChild(newRow);


}

function removeItem () {
  num = this.dataset.index
  const element = document.querySelectorAll(`[data-index="${num}"]`);
  let array = Array.from(element);
  console.log(array);
  array.forEach(element => {
    element.remove();
  });
}

