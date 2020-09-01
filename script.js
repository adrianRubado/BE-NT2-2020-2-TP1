const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')





function addTodo() {
  //alert('Boton Add TODO clickeado!')
  list.appendChild(createMenuItem()) 
  
  
  
    }

  

function createMenuItem(name) {
var count = parseInt(itemCountSpan.innerText)  
count+= 1
var ul= document.createElement("ul");
var description = document.createTextNode("Tarea "+ count);
var checkbox = document.createElement("input");

checkbox.type = "checkbox";    
checkbox.name = "slct[]";      
checkbox.value = name;
checkbox.id = name
checkbox.onclick = function() {onClicked(this)}
       

ul.appendChild(checkbox);   
ul.appendChild(description)

itemCountSpan.innerText = count; 

uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1;




return ul
}


function onClicked(checkbox) { 
  if (checkbox.checked == true) {
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1; 
  } else {
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1; 
  }
}




