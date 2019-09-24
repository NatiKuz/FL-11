const $list = $(".list");
const $input  = $("#add-input");
const $add = $("#add-submit");

//generate a new list item
let makeListItem = function(task, status='false') {

  let $listItem = $(`<li class="item" data-status="${false}"
    <span class="item-text">${task}</span>
    <button class="item-remove">Remove</button>
    <button class="item-status">In Progress</button>
  </li>`);
  
  return $listItem;
}

$add.on( "click", function(event) {
  event.preventDefault();

  const newTask = $input.val();
  let listItemToAdd = makeListItem(newTask);
  $list.append(listItemToAdd);
  let todos = JSON.parse(localStorage.todos || '[]');
  let maxId = todos.reduce((acc, cur) => {
    if (acc < cur.id) {
      acc = cur.id;
    }

    return acc;
  }, 0)
  todos.push({ id: ++maxId, name: newTask, status: false })
  localStorage.todos = JSON.stringify(todos);

  $input.val("");
});

$list.on( "click", ".item-remove", function() {
  $(this).parent().remove();
});

$list.on( "click", ".item-status", function(event) {
  console.log("event = ", event)
  $(this).parent().prop('data-status', );
});

function generateList($list) {
  const todos = JSON.parse(localStorage.todos || '[]');
  $list.innerHTML = "";
  
  for (const todo of todos) {
      $list.append(makeListItem(todo.name, todo.status));

  }
}

$(document).ready(function() {
  generateList($list);
});