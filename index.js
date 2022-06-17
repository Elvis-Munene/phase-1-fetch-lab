function fetchBooks() {

return fetch("https://anapioficeandfire.com/api/books")
.then((response1) => response1.json())
.then((response2) => renderBooks(response2));

}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});


