let myLibrary = [];

function Book (title,author,pages) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  
}



const add_book=document.querySelector('.add');
const remove_book=document.querySelector('.remove');

const book_rack=document.querySelector('#book_rack');

function addBookToLibrary(title,author,pages) {
  console.log(title);
  console.log(author);
  console.log(pages);
   const div_container=document.createElement('div');
   book_rack.appendChild(div_container);
   const div1=document.createElement('div');
   const div2=document.createElement('div');
   const div3=document.createElement('div');
   div1.textContent="Title: "+title;
   div2.textContent="Author: "+author;
   div3.textContent="Pages: "+pages;
   div_container.appendChild(div1);
   div_container.appendChild(div2);
   div_container.appendChild(div3);
}

  add_book.addEventListener('click',formAppear);

function formAppear () {

       const form=document.createElement('form');
       document.querySelector('body')
       .appendChild(form);

       const label1=document.createElement('label');
       label1.setAttribute('for','title');
       label1.textContent="Title";
       form.appendChild(label1)

       const input1=document.createElement('input');
       input1.setAttribute('type','text');
       input1.setAttribute('id','title');
       form.appendChild(input1);

       const label2=document.createElement('label');
       label2.setAttribute('for','author');
       label2.textContent="Author";
       form.appendChild(label2)

       const input2=document.createElement('input');
       input2.setAttribute('type','text');
       input2.setAttribute('id','author');
       form.appendChild(input2);

       const label3=document.createElement('label');
       label3.setAttribute('for','pages');
       label3.textContent="Pages";
       form.appendChild(label3)

       const input3=document.createElement('input');
       input3.setAttribute('type','number');
       input3.setAttribute('id','pages');
       form.appendChild(input3);

       const button_submit=document.createElement('button');
       button_submit.setAttribute('type','button');
       button_submit.textContent="Submit";
       form.appendChild(button_submit);

       button_submit.addEventListener('click',() => {
        addBookToLibrary(input1.value,input2.value,input3.value);
        form.style.display='none';
        form.remove();

       })
      
      

}

