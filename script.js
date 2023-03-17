let myLibrary=[];


function Book(title,author,pages,status) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.status=status;
}



function addBookToLibrary() {
  const div_body=document.querySelector('.body');
  for(let i=0;i<myLibrary.length;i++) {
    const div_container=document.createElement('div');
    div_body.appendChild(div_container);

    for(let prop in myLibrary[i]){
      const div=document.createElement('div');
      div_container.appendChild(div);
      div.textContent=`${prop}: ${myLibrary[i][prop]}`
    }
  

    

}
}


//demo books
myLibrary[0]=new Book('Alchemist','Paulo coelho',295,true);
myLibrary[1]=new Book('Kite Runner','Khalid Hosseini',300,false);

addBookToLibrary();