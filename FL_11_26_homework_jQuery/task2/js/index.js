const $list = $(".list");
const $input  = $("#add-input");
const $add = $("#add-submit");

//generate a new list item
let makeListItem = function({name, status, id}) {

  let $listItem = $(`<li class="item" data-status="${status}" data-id="${id}">
    <span class="item-text ${status ? "done" : ""}">${name}</span>
    <button class="item-remove">Remove</button>
    <button class="item-status">${status ? "Done" : "In Progress"}</button>
  </li>`);
  
  return $listItem;
}

$add.on( "click", function(event) {
  event.preventDefault();

  const newTask = $input.val();

  let todos = getTodos();
  let maxId = todos.reduce((acc, cur) => {
    if (acc < cur.id) {
      acc = cur.id;
    }

    return acc;
  }, 0);
  todos.push({ id: ++maxId, name: newTask, status: false })
  setTodos(todos)

  let listItemToAdd = makeListItem({name: newTask, status: false, id: maxId});
  $list.append(listItemToAdd);

  $input.val("");
  calculate();
});

$list.on( "click", ".item-remove", function(event) {
  event.preventDefault();
  let id = parseInt($(this).closest(".item").attr("data-id"), 10);
  let todos = getTodos();
  todos = todos.filter(item => item.id !== id);
  setTodos(todos)

  $(this).parent().remove();
  calculate();
});

$list.on( "click", ".item-status", function(event) {
  let id = parseInt($(this).closest(".item").attr("data-id"), 10);

  let todos = getTodos();
  todo = todos.find(item => item.id === id);

  const status = !todo.status;
  todo.status = status;

  $(this).closest(".item").attr("data-status", status);
  $(this).siblings("span").toggleClass("done");
  $(this).text(status ? "Done" : "In progress");
  
  setTodos(todos);
  calculate();
});

function generateList($list) {
  const todos = JSON.parse(localStorage.todos || "[]");
  $list.innerHTML = "";
  
  for (const todo of todos) {
      $list.append(makeListItem(todo));

  }

  calculate();
}

function getTodos() {
  return JSON.parse(localStorage.todos || "[]");
}

function setTodos(todos) {
  localStorage.todos = JSON.stringify(todos);
}

function calculate() {
  const $done = $(".items-done");
  const $inProgress = $(".in-progress");
  const $total = $(".total");

  const todos = getTodos();
  const done = todos.filter(item => item.status).length;
  const inProgress = todos.filter(item => !item.status).length;

  $done.text(done);
  $inProgress.text(inProgress);
  $total.text(done + inProgress);
}

$(document).ready(function() {
  generateList($list);
});