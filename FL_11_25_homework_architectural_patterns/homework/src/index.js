import './style.scss';

// import { usersTable } from './components/usersTable';

// ** Here you can pass store down to your components
// ** and initialize them, like in example below

// ** import {createStore} from 'redux';
// ** import myTestReducer from './reducers/my_test_reducer.js';
// ** import MyTestComponent from './components/my_test_component';

// ** const store = createStore(myTestReducer);

// ** const testComponent = new MyTestComponent(store);

// ** testComponent.init()


import {createStore} from 'redux';
import reducer from './reducer';
import Users from './users';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let ClassUsers;

const HEADERS = {
    picture: 'Photo',
    name: 'Name',
    location: 'Address',
    email: 'Email',
    phone: 'Phone number',
    timezone: 'Timezone',
    actions: 'Actions'
};

const table = document.querySelector('table');

document.addEventListener('DOMContentLoaded', () => {
    ClassUsers = new Users({
        ui: document.querySelector('#root'),
        store: store
    });

    generateTable(table);
});


const buttonLoadMore = document.getElementById('load-more');

buttonLoadMore.addEventListener('click', (event) => {
    ClassUsers.loadMore();
    generateTable(table);
}, false);

const inputSearch = document.getElementById('search');

inputSearch.oninput = function() {
    ClassUsers.doSearch(inputSearch.value);
    generateTable(table);
};

function generateTableHead(table) {
    const thead = table.createTHead();
    const row = thead.insertRow();

    for (const key of Object.values(HEADERS)) {
        const th = document.createElement('th');
        const text = document.createTextNode(key);

        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table) {
    const users = ClassUsers.viewUsers();
    table.innerHTML = '';
    generateTableHead(table);
    refreshCountInfo(users.length);

    if (users.length === 0) {
        const element = document.createTextNode('No Users are Found');
        table.appendChild(element);
        return;
    }

    for (const user of users) {
        const row = table.insertRow();

        row.setAttribute('data-id', user['id']);

        for (const key of Object.keys(HEADERS)) {
            const cell = row.insertCell();
            let element;

            switch (key) {
            case 'picture':
                element = document.createElement('img');
                element.setAttribute('src', user[key]);
                break;
            case 'actions':
                element = document.createElement('button');
                element.classList.add('remove-user');
                element.textContent = 'Remove';

                element.addEventListener('click', (event) => {
                    const target = event.target;
                    const id = parseInt(target.parentElement.parentElement.getAttribute('data-id'), 10);

                    ClassUsers.removeUser(id);
                    generateTable(table, store.getState().users);
                }, false);

                break;
            default:
                element = document.createTextNode(user[key]);
            }

            cell.appendChild(element);
        }
    }
}

function refreshCountInfo(countUsers) {
    const state = store.getState();
    let element = document.getElementById('count-info');
    const countRow = state.rowsView > countUsers
        ? countUsers
        : state.rowsView < state.count
            ? state.rowsView
            : state.count;
    element.textContent = `Displayed ${countRow} users out of ${state.count}`;
}