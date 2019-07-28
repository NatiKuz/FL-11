const rootNode = document.getElementById('root');

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';

let htmlWrapper = `
    <section class = 'todolist'>
        <h1>Simple TODO application</h1>
        <button class = 'add'>Add new task</button>
        <div class = 'list'>
            <div class = 'msg'>
                TODO is empty
            </div>
            <table></table>
        </div>
    </section>
    <section class = 'add-task'>
        <h2>Add task</h2>
        <div class = 'form'>
            <input type = 'text' class = 'input-task' />
            <div class = 'buttons'>
                <button class = 'cancel'>Cancel</button>
                <button class = 'save'>Save changes</button>
            </div>
        </div>
    </section>
    
`;

wrapper.innerHTML = htmlWrapper;

rootNode.appendChild(wrapper);

showTodoItems();

let sectionTodoList = document.querySelector('.todolist');
let sectionAddTask = document.querySelector('.add-task');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let buttonAdd = document.querySelector('.add');
let form = document.querySelector('.form');
let buttonCancel = document.querySelector('.cancel');
let buttonSave = document.querySelector('.save');
let table = document.querySelector('table');
let input = document.querySelector('.input-task');
let msg = document.querySelector('.msg');


sectionAddTask.style.display = 'none';

buttonAdd.addEventListener('click', function() {
    form.style.display = 'flex'; 
    sectionTodoList.style.display = 'none';
    sectionAddTask.style.display = 'block';
    h2.textContent = 'Add task';

    location.hash = '/add';
});

buttonSave.addEventListener('click', function() {
    let txt = input.value;
    const lenItemsForIsModify = 2;
    let isModify = location.href.split('modify').length === lenItemsForIsModify;
    const todoItems = getTodoItems();

    if (txt && isModify) {
        let itemNumber = parseInt(location.href.split('modify')[1].split('/')[1]);
        for (let item = 0; item < todoItems.length; item++) {
            if (todoItems[item].id === itemNumber) {
                todoItems[item].description = txt;
            }
        }

        setTodoItems(todoItems);
    }

    if (txt && !isModify) {
        let todoItemsNumber = getNextTodoItemsNumber();

        todoItems.push({
            id: todoItemsNumber,
            isDone: false,
            description: txt
        });

        setTodoItems(todoItems);
    }

    showTodoItems();

    if (txt) {
        input.value = '';
        sectionAddTask.style.display = 'none';
        sectionTodoList.style.display = 'flex';
        msg.style.display = 'none';

        location.hash = '';
    }
});

buttonCancel.addEventListener('click', function() {
    input.value = '';
    sectionTodoList.style.display = 'flex';
    sectionAddTask.style.display = 'none';
    location.hash = '';
});

function setTodoItems(todoItems) {
    todoItems = sortTodoItems(todoItems);

    console.log(todoItems);

    window.localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function getTodoItems() {
    let todoItems = window.localStorage.getItem('todoItems');
        
    if (todoItems) {
        return JSON.parse(todoItems);
    }

    return [];
}

function getNextTodoItemsNumber() {
    let todoItems = getTodoItems();
    let todoItemsNumber = 0;

    for (let i = 0; i < todoItems.length; i++) {
        let item = todoItems[i];
        if (item.id > todoItemsNumber) {
            todoItemsNumber = item.id;
        }
    }

    return ++todoItemsNumber;
}

function sortTodoItems(todoItems) {
    let selectedTodoItems = todoItems.filter((item) => item.isDone);

    let notSelectedTodoItems = todoItems.filter((item) => !item.isDone);

    return notSelectedTodoItems.concat(selectedTodoItems);
}

function showTodoItems() {
    let todoItems = getTodoItems();
    let msgEmptyList = document.querySelector('.msg');
    let table = document.querySelector('table');
    table.innerHTML = '';

    if (todoItems.length > 0) {
        msgEmptyList.classList.add('hidden');
    } else {
        msgEmptyList.classList.remove('hidden');
    }

    for (let i = 0; i < todoItems.length; i++) {
        const item = todoItems[i];

        let tr = document.createElement('tr');
        tr.setAttribute('data-item', item.id);

        tr.innerHTML = `
            <td class = 'action ${item.isDone ? 'done' : 'todo'}'></td>
            <td class = 'desctiption'>${item.description}</td>
            <td class = 'remove'></td>
        `;   

        let tdAction = tr.querySelector('td:nth-child(1)');
        let tdDescription = tr.querySelector('td:nth-child(2)');

        tdAction.addEventListener('click', function(event) {            
            let target = event.target;
            target.classList.toggle('done')
            target.classList.toggle('todo');

            const parentTd = event.target.parentNode;
            const selectedItem = parseInt(parentTd.getAttribute('data-item'));

            for (let item = 0; item < todoItems.length; item++) {
                if (todoItems[item].id === selectedItem) {
                    todoItems[item].isDone = target.classList.contains('done');
                }
            }

            setTodoItems(todoItems);
            showTodoItems();
        });

        tdDescription.addEventListener('click', function() {
            form.style.display = 'flex';
            input.value = tdDescription.textContent;

            sectionTodoList.style.display = 'none';
            sectionAddTask.style.display = 'block';
            h2.textContent = 'Modify item';

            let itemNumber = tr.dataset.item;

            location.hash = `/modify/${itemNumber}`;
        });

        let tdRemove = tr.querySelector('td:nth-child(3)');

        tdRemove.addEventListener('click', function(event) {
            const parentTd = event.target.parentNode;
            const removeItem = parseInt(parentTd.getAttribute('data-item'));

            todoItems = todoItems.reduce((acc, cur) => {
                if (cur.id !== removeItem) {
                    acc.push(cur);
                }
        
                return acc;
            }, [])
        
            setTodoItems(todoItems);
            showTodoItems();
        });  

        table.appendChild(tr);
    }
}
