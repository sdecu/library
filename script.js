const open = document.querySelector('#dialog');
const modal = document.querySelector('.modal');
open.addEventListener("click", () => {
modal.showModal();
});

const button = document.querySelector('button');
button.addEventListener('click', (event)  =>  {
  event.preventDefault();
  addBookToLibrary();
});

const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const pages = document.querySelector('#pages');
    const readStatus = document.querySelector('input[name="readStatus"]:checked').value === 'true';
    const newBook = new Book(author.value, title.value, pages.value, readStatus);

    if (!author.value || !title.value || !pages.value) {
      button.setCustomValidity("please fill out all fields");
      button.reportValidity();
    } else {
        button.setCustomValidity("");
        myLibrary.push(newBook);
        displayBooks();
        author.value = '';
        title.value = '';
        pages.value = '';
        modal.close();
    }
;
}

function checkFields()  {
  docEl.author
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
    readStatusHeader.textContent = 'Read Status (click to toggle)';
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
  readStatusCell.id = `ifRead${myLibrary.length - 1}`;
  readStatusCell.addEventListener('click', toggleReadStatus)
  newRow.appendChild(readStatusCell);

  const removeCell = document.createElement('button');
  removeCell.textContent = 'remove';
  removeCell.dataset.index = myLibrary.length - 1;
  removeCell.addEventListener('click', removeItem);
  newRow.appendChild(removeCell);

  booksTable.appendChild(newRow);


}

function removeItem () {
  num = this.dataset.index;
  const element = document.querySelectorAll(`[data-index="${num}"]`);
  let array = Array.from(element);
  console.log(array);
  array.forEach(element => {
    element.remove();
  });
}

function toggleReadStatus ()  {
  x = this.id;
  const element = document.querySelector(`#${x}`);
  if(element.textContent == 'Read') {
    return element.textContent = 'Not Read';
  } else if  (element.textContent == 'Not Read')  {
    return element.textContent = 'Read'
  };
}