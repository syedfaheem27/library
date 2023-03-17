let myLibrary=[];


function Book(title,author,pages,status) {
  this.Title=title;
  this.Author=author;
  this.Pages=pages;
  this.Status=status;
}



function addBookToLibrary() {
  const div_body=document.querySelector('.body');
  for(let i=0;i<myLibrary.length;i++) {
    const div_container=document.createElement('div');
    div_body.appendChild(div_container);

    for(let prop in myLibrary[i]){
      if(prop=='Status'){
      const div=document.createElement('div');
      div_container.appendChild(div);
      if(myLibrary[i][prop]){
        div.textContent=prop+': Read';
      }
      else{
        div.textContent=prop+': Not read';
      }
      }
      else{
      const div=document.createElement('div');
      div_container.appendChild(div);
      div.textContent=prop+': '+myLibrary[i][prop];
      }
    }
  

    

}
}


//demo books
myLibrary[0]=new Book('Alchemist','Paulo coelho',295,true);
myLibrary[1]=new Book('Kite Runner','Khalid Hosseini',300,false);

addBookToLibrary();