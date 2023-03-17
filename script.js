let myLibrary=[];


function Book(array) {
  this.Title=array[0].value;
  this.Author=array[1].value;
  this.Pages=array[2].value;
  this.Status=array[3].checked;
}



function addBookToLibrary(form) {
  const formNodes=Array.from(form.childNodes);
  console.log(formNodes);
  const inputArray=formNodes.filter((input)=> {
    return (input.getAttribute('data-name')=='input');
  })
  console.log(inputArray);
  console.log(inputArray[3].checked);
  myLibrary[n]=new Book(inputArray);
  console.log(myLibrary[n])


}


const addbook=document.querySelector('#add');
addbook.addEventListener('click',formAppear);

let submit_flag=true;
//ensures that a new form is loaded once the user submits the existing form
let n=0;

function formAppear() {
  if(submit_flag){
  const form=document.createElement('form');
  document.querySelector('body')
  .appendChild(form);

  const myLabels=[],
  myInputs=[];

  for(let i=0;i<4;i++){
    myLabels[i]=document.createElement('label');
    myInputs[i]=document.createElement('input');
    form.appendChild(myLabels[i]);
    form.appendChild(myInputs[i]);

    switch(i) {
      case 0:
        myLabels[i].setAttribute('for','title');
        myLabels[i].textContent='Title';
        myInputs[i].setAttribute('type','text');
        myInputs[i].setAttribute('id','title');
        myInputs[i].setAttribute('data-name','input');
        break;

        case 1:
          myLabels[i].setAttribute('for','author');
          myLabels[i].textContent='Author';
          myInputs[i].setAttribute('type','text');
          myInputs[i].setAttribute('id','author');
          myInputs[i].setAttribute('data-name','input');
          break;

        case 2:
          myLabels[i].setAttribute('for','pages');
          myLabels[i].textContent='Pages';
          myInputs[i].setAttribute('type','number');
          myInputs[i].setAttribute('id','pages');
          myInputs[i].setAttribute('data-name','input');
          break;

        default:
          myLabels[i].setAttribute('for','status');
          myLabels[i].textContent='Read';
          myInputs[i].setAttribute('type','checkbox');
          myInputs[i].setAttribute('id','status');
          myInputs[i].setAttribute('data-name','input');
          break;
    }
  }
  const submit_button=document.createElement('button');
  form.appendChild(submit_button);
  submit_button.setAttribute('type','button');
  submit_button.textContent="Submit";

  submit_button.addEventListener('click',()=>{
    addBookToLibrary(form);
  });
  }
  else {
    return;
  }

}