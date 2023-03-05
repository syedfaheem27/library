let myLibrary = [];

function Book (title,author,pages,read_status) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.status=read_status; 
}

const book1=new Book('Alchemist','Paulo Coelho',295,true);
const book2=new Book('Forty Rules of Love','Elif Shafak',340,false);

myLibrary[0]=book1;
myLibrary[1]=book2;

function addBookToLibrary() {
    const book_rack=document.querySelector('#book_rack');
    for(let i=0;i<myLibrary.length;i++){
      const container=document.createElement('div');
      book_rack.appendChild(container);

      const div1=document.createElement('div');
      div1.textContent='Title: '+myLibrary[i].title;
      container.appendChild(div1);

      const div2=document.createElement('div');
      div2.textContent='Author: '+myLibrary[i].author;
      container.appendChild(div2);

      const div3=document.createElement('div');
      div3.textContent='Author: '+myLibrary[i].pages;
      container.appendChild(div3);

      const div4=document.createElement('div');
      if(myLibrary[i].status){
        div4.textContent='Current Status: Read';
      }else {
        div4.textContent='Current Status: Yet to read';
      }
      container.appendChild(div4);
    }


}
addBookToLibrary();
