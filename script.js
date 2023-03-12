let books= [];

//an array that might hold div's which will go inside the book_rack div
let mydiv=[];

//an index for the books that go in the myBooks array
let ind=0;


let div_container=[];

function Book (title,author,pages,current_status) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.current_status=current_status;
}


//Buttons to add and remove a book from the library.
const add_book=document.querySelector('.add');
const remove_book=document.querySelector('.remove');

//Book_rack-a div container to keep your books in 
const book_rack=document.querySelector('#book_rack');



add_book.addEventListener('click',formAppear);


//a form submit flag which ensures that no form appears until the submit button is clicked
let submit_flag=true;

//a function that allows the form to appear
function formAppear() {
  if(submit_flag){
    const form=document.createElement('form');
    document.querySelector('body')
    .appendChild(form);

    //Creating and appending labels and input fields to the form
    let myLabel=[];
    let myInput=[];
    for(let i=0;i<4;i++){
      myLabel[i]=document.createElement('label');
      form.appendChild(myLabel[i]);
    
      myInput[i]=document.createElement('input');
      form.appendChild(myInput[i]);
    
      switch(i){
        case 0:
          myLabel[i].setAttribute('for','title');
          myLabel[i].textContent="Title"
          myInput[i].setAttribute('type','text');
          myInput[i].setAttribute('id','title');
          break;
        case 1:
          myLabel[i].setAttribute('for','author');
          myLabel[i].textContent="Author"
          myInput[i].setAttribute('type','text');
          myInput[i].setAttribute('id','author');
          break;
        case 2:
          myLabel[i].setAttribute('for','pages');
          myLabel[i].textContent="Pages";
          myInput[i].setAttribute('type','number');
          myInput[i].setAttribute('id','pages'); 
          break;  
        default:
          myLabel[i].setAttribute('for','current_status');
          myLabel[i].textContent="Read";
          myInput[i].setAttribute('type','checkbox');
          myInput[i].setAttribute('id','current_status');
          myInput[i].setAttribute('value','read');
      }
    }
    

      //create a submit button for form
      const form_submit=document.createElement('button');
      form.appendChild(form_submit);
      form_submit.setAttribute('type','button');
      form_submit.textContent="Submit";
      
      submit_flag=false;

      //functionality for the form_submit button
  form_submit.addEventListener('click',()=> {
    submit_flag=true;
    addBookToLibrary(myInput[0].value,myInput[1].value,myInput[2].value,myInput[3].value);
    form.remove();
  })
          }

    else {
      return;
    }        

  

  

}

//a function that adds books to library
function addBookToLibrary(title,author,pages,current_status) {
  books[ind]=new Book(title,author,pages,current_status);

  div_container[ind]=document.createElement('div');
  book_rack.appendChild(div_container[ind]);

  //creating div_container and the three div's inside it that holds title,author and pages
  for(let i=0;i<4;i++){
    mydiv[i]=document.createElement('div');
    div_container[ind].appendChild(mydiv[i]);

    switch(i){
      case 0:
        mydiv[i].textContent='Title: '+title;
        break;
      case 1:
          mydiv[i].textContent='Author: '+author;
          break;
      case 2:
          mydiv[i].textContent='Pages: '+pages;
          break;
      default:
        console.log(current_status==='read');
          if(current_status==='read'){
            mydiv[i].textContent='Current Status: Read';
          }
          else {
            mydiv[i].textContent='Current Status: Yet to read';
          }

    }
  }
  
  ind++;
}