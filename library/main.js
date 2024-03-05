const myLibrary = [];

class Book{
    constructor(title,author,pages,readStatus = 'not read yet'){
        this.title = title 
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
    }
    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`
    }
    
}

//let book = Book('title','author',365)
//console.log(book.info)

function addBookToLibrary(title,author,pages,readStatus) {
    let newBook = new Book(title,author,pages,readStatus);
    myLibrary.push(newBook)
    console.log(`${newBook.title} was added to your library`)

}


function displayLibrary(){
    let bookList = document.getElementById("bookList");
    bookList.innerHTML= "";
    myLibrary.forEach((book, index) => {
         let li = document.createElement("li");
         li.setAttribute('data-index', index)

         let titleDiv = document.createElement("div");
         let authorDiv = document.createElement("div");
         let pagesDiv = document.createElement("div");
         let readStatusDiv = document.createElement("div");
         let deleteButton = document.createElement("button"); //create delete button
         let readButton = document.createElement("button"); //create "read?" button

         titleDiv.textContent = `Title: ${book.title}`;
         authorDiv.textContent = `Author: ${book.author}`;
         pagesDiv.textContent = `Pages: ${book.pages}`;
         readStatusDiv.textContent = `Read Status: ${book.readStatus}`;
         deleteButton.textContent = 'Delete';
         readButton.textContent = 'Change Read Status?';

         deleteButton.addEventListener('click',()=>{
            const bookIndex = li.getAttribute('data-index');  // get index
            myLibrary.splice(bookIndex,1); // delete the array element
            displayLibrary() // refresh library indexes
         })

         readButton.addEventListener('click',()=>{
            const bookIndex = li.getAttribute('data-index');
            let readStatus = myLibrary[bookIndex].readStatus;
            if(readStatus === 'not read yet'){
                myLibrary[bookIndex].readStatus = 'read';
            }else{
                myLibrary[bookIndex].readStatus = 'not read yet';      
            }
            displayLibrary();
         })

 
         li.appendChild(titleDiv);
         li.appendChild(authorDiv);
         li.appendChild(pagesDiv);
         li.appendChild(readStatusDiv);
         li.appendChild(deleteButton);
         li.appendChild(readButton)
 
         bookList.appendChild(li);
    })
 }

const newBookButton = document.getElementById('newBookButton');
const bookForm = document.getElementById('bookForm');

newBookButton.addEventListener('click',() => {
    bookForm.style.display = 'block';
})

const newBookForm = document.getElementById('newBookForm');
newBookForm.addEventListener('submit',(event) => {
    event.preventDefault();
    const title = document.getElementById("title").value; 
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let readStatus;
    if (document.getElementById("read").checked) {
        readStatus = document.getElementById("read").value; // Assign value if "read" is checked
    } else if (document.getElementById("notRead").checked) {
        readStatus = document.getElementById("notRead").value; // Assign value if "notRead" is checked
    }
    console.log(readStatus);
    addBookToLibrary(title,author,pages,readStatus)
    displayLibrary();
    newBookForm.reset()
})




