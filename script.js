let myLibrary = [];

let myBooks = [];
 //will hold the div elements being inserted in the div classed body

 let n = 0; 
//denotes the index of myLibrary and myBooks array

let submit_flag = true;
//ensures that a new form is loaded once the user submits the existing form

const div_body = document.querySelector(".body");

function Book(inputArray) {
  this.Title = inputArray[0].value;
  this.Author = inputArray[1].value;
  this.Pages = inputArray[2].value;
  this.Status = inputArray[3].checked;
}

function addBookToLibrary(form) {
  const inputArray = Array.from(form.childNodes).filter((input) => {
    return input.getAttribute("data-name") == "input";
  });
  myLibrary[n] = new Book(inputArray);
  myBooks[n] = document.createElement("div");
  myBooks[n].setAttribute('data-index',n);
  div_body.appendChild(myBooks[n]);

  for (let prop in myLibrary[n]) {
    if (prop == "Status") {
      const button_div= document.createElement("button");
      myBooks[n].appendChild(button_div);
      button_div.addEventListener('click',changeStatus);
      if (myLibrary[n][prop]) {
        button_div.textContent = "Read";
        button_div.classList.add('read');
      } else {
        button_div.textContent = "Not read";
        button_div.classList.add('not_read');
      }
    } else {
      const div = document.createElement("div");
      myBooks[n].appendChild(div);
      div.textContent = prop + ": " + myLibrary[n][prop];
    }
  }
  submit_flag = true;
  form.remove();
  n++;
}


const addbook = document.querySelector("#add");
addbook.addEventListener("click", formAppear);

function formAppear() {
  if (submit_flag) {
    submit_flag = false;
    const form = document.createElement("form");
    document.querySelector("body").appendChild(form);

    const myLabels = [],
      myInputs = [];

    for (let i = 0; i < 4; i++) {
      myLabels[i] = document.createElement("label");
      myInputs[i] = document.createElement("input");
      form.appendChild(myLabels[i]);
      form.appendChild(myInputs[i]);

      switch (i) {
        case 0:
          myLabels[i].setAttribute("for", "title");
          myLabels[i].textContent = "Title";
          myInputs[i].setAttribute("type", "text");
          myInputs[i].setAttribute("id", "title");
          myInputs[i].setAttribute("data-name", "input");
          break;

        case 1:
          myLabels[i].setAttribute("for", "author");
          myLabels[i].textContent = "Author";
          myInputs[i].setAttribute("type", "text");
          myInputs[i].setAttribute("id", "author");
          myInputs[i].setAttribute("data-name", "input");
          break;

        case 2:
          myLabels[i].setAttribute("for", "pages");
          myLabels[i].textContent = "Pages";
          myInputs[i].setAttribute("type", "number");
          myInputs[i].setAttribute("id", "pages");
          myInputs[i].setAttribute("data-name", "input");
          break;

        default:
          myLabels[i].setAttribute("for", "status");
          myLabels[i].textContent = "Read";
          myInputs[i].setAttribute("type", "checkbox");
          myInputs[i].setAttribute("id", "status");
          myInputs[i].setAttribute("data-name", "input");
         
      }
    }
    const submit_button = document.createElement("button");
    form.appendChild(submit_button);
    submit_button.setAttribute("type", "button");
    submit_button.textContent = "Submit";

    submit_button.addEventListener("click", () => {
      addBookToLibrary(form);
    });
  } else {
    return;
  }
}

function changeStatus(event) {
  if(event.target.textContent=='Read'){
    event.target.textContent="Not Read";
    event.target.classList.remove('read');
    event.target.classList.add('not_read');
  }
  else {
    event.target.textContent="Read";
    event.target.classList.remove('not_read');
    event.target.classList.add('read');
  }
  }
 
 
  
  
//   function removeBook(event) {
    
//     // const parent=event.target.parentNode;
//     // parent.remove();
//     // const index=parent.getAttribute('data-set');
//     // myBooks.splice(index,1);
//     // myLibrary.splice(index,1);
//     // n--;

// }