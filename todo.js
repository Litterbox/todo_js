var todoList = document.getElementById('todo_list');
var newItem = document.getElementById('new_item');
var addButton = document.getElementById('add_button');

// DOM node creation and manipulation
var addNewItem = function() {
  /*
  // 3 ways:

  // 1. UNSAFE naive .innerHTML way, DO NOT DO:
  todoList.innerHTML +=
    '<li>' +
      newItem.value +
      ' <button>x</button>' +
    '</li>';
  // why is this unsafe? Well, in old browsers, entering something like:
  //
  //   <script>alert('this script could do bad things to your page!');</script>
  //
  // would run the script, which could do bad things to your page. Modern Chrome
  // actually won't run the script to protect you from exactly that, but you can
  // still get undesirable behavior by entering something like:
  //
  //   <style>html{display:none}</style>
  //
  // which will hide your entire page. Have fun recovering from that.



  */
  // 2. without .innerHTML:
  var newItemText = document.createTextNode(newItem.value + ' ');
  // make sure you know why I'm appending a space at the end ^

  var newDeleteButtonContents = document.createTextNode('x');
  var newDeleteButton = document.createElement('button');
  newDeleteButton.appendChild(newDeleteButtonContents);

  var newListItem = document.createElement('li');
  newListItem.appendChild(newItemText);
  newListItem.appendChild(newDeleteButton);

  todoList.appendChild(newListItem);
  /*



  // 3. DOM manipulation way, using .innerHTML only when safe:
  var newItemText = document.createTextNode(newItem.value);
  var newListItem = document.createElement('li');
  newListItem.appendChild(newItemText);
  newListItem.innerHTML += ' <button>x</button>';

  todoList.appendChild(newListItem);
  */



  // finally, clear the new_item input field
  newItem.value = '';
};

// basic event handler
addButton.onclick = addNewItem;

// event handler with if-statement
newItem.onkeydown = function(event) {
  if (event.which === 13) {
    addNewItem();
  }
};

// event handler using event delegation
todoList.onclick = function(event) {
  if (event.target.tagName === 'BUTTON') {
    todoList.removeChild(event.target.parentNode);
  }
};
