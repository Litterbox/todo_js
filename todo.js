var todoList = document.getElementById('todo_list');
var newItem = document.getElementById('new_item');
var addButton = document.getElementById('add_button');

// DOM node creation and manipulation
var addNewItem = function(todoItem) {
  var newItemText = document.createTextNode(todoItem + ' ');
  // make sure you know why I'm appending a space at the end ^

  var newDeleteButtonContents = document.createTextNode('x');
  var newDeleteButton = document.createElement('button');
  newDeleteButton.appendChild(newDeleteButtonContents);

  var newListItem = document.createElement('li');
  newListItem.appendChild(newItemText);
  newListItem.appendChild(newDeleteButton);


  // remove button event handler without event delegation
  newDeleteButton.onclick = function() {
    todoList.removeChild(newListItem);
  };


  todoList.appendChild(newListItem);

  // finally, clear the new_item input field
  newItem.value = '';
};

// DOM value reading
var addNewItemFromForm = function() {
  addNewItem(newItem.value);
};

// basic event handler
addButton.onclick = addNewItemFromForm;

// event handler with if-statement
newItem.onkeydown = function(event) {
  if (event.which === 13) {
    addNewItemFromForm();
  }
};

// initial todo items
addNewItem('Write the HTML page for a todo list app');
addNewItem('Write the JS so your todo list app works');
