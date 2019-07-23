let rootNode = document.getElementById('root');

const iconCheckBoxOutlineBlank = 'check_box_outline_blank';
const iconDelete = 'delete';
const iconCheckBox = 'check_box';
const iconAddBox = 'add_box';
const iconEditChange = 'edit';
const iconSaveChange = 'save';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const h1 = document.createElement('h1');
h1.textContent = 'TODO Cat List';

const h6 = document.createElement('h6');
h6.textContent = 'Maximum item per list are created';

const div = document.createElement('div');
div.className = 'add-action';
const input = document.createElement('input');
input.placeholder = 'Add New Action';
div.appendChild(input);

const aAdd = createMaterialIcons(iconAddBox);
aAdd.className = 'add';
aAdd.setAttribute('disabled', 'true');

div.appendChild(aAdd);

const table = document.createElement('table');
table.className = 'cat-list';
const tBody = document.createElement('tBody');
table.appendChild(tBody);

rootNode.appendChild(wrapper);
wrapper.appendChild(h1);
wrapper.appendChild(h6);
wrapper.appendChild(div);
wrapper.appendChild(document.createElement('hr'));
wrapper.appendChild(table);

const addItem = document.getElementById('add');

input.addEventListener('input', function(event) {
    const $target = event.target;

    if ($target.value.length) {
        aAdd.removeAttribute('disabled');
    } else {
        aAdd.setAttribute('disabled', 'true');
    }
});

aAdd.addEventListener('click', function() {

    if (aAdd.getAttribute('disabled') === 'true') {
        return false;
    }

    tBody.appendChild(addRow(input.value));
    actionNotification();
    input.value = '';

    this.setAttribute('disabled', 'true');
    return true;
});

function addRow(text) {
    const tr = document.createElement('tr');

    const currentRowNumber = nextRowNumber();
    tr.setAttribute('data-item', currentRowNumber);
    
    const td1 = document.createElement('td');
    const notDone = createMaterialIcons(iconCheckBoxOutlineBlank);
    td1.appendChild(notDone);

    notDone.addEventListener('click', function(event) {
        event.target.textContent = iconCheckBox;
    });

    const td2 = document.createElement('td');
    td2.className = 'middle-column';
    td2.textContent = text;

    const td3 = document.createElement('td');
    const editChanges = createMaterialIcons(iconEditChange);
    td3.appendChild(editChanges);

    editChanges.addEventListener('click', function(event) {
        event.target.textContent = iconSaveChange;
    });

    const td4 = document.createElement('td');
    const deleteItem = createMaterialIcons(iconDelete);
    td4.className = 'delete-item';
    deleteItem.setAttribute('onclick', `removeElement(${currentRowNumber})`);
    td4.appendChild(deleteItem);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    return tr;
}

function createMaterialIcons(name) {
    const tagA = document.createElement('a');

    const tagI = document.createElement('i');
    tagI.className = 'material-icons';
    tagI.textContent = name;

    tagA.appendChild(tagI);

    return tagA;
}

function removeElement(id) {
    const itemList = document.querySelector(`tr[data-item="${id}"]`);

    itemList.remove();

    actionNotification();
}

function nextRowNumber() {
    const elements = document.querySelectorAll('tr');

    const startNumber = 0;
    if (elements.length === startNumber) {
        return startNumber;
    }

    const items = [...elements].map(el => el.getAttribute('data-item')).map(Number).sort();

    const oneNumber = 1;
    return items[items.length - oneNumber] + oneNumber;
}

function actionNotification() {
    const items = document.querySelectorAll('tr');

    const maxListItems = 10;
    if (items.length < maxListItems) {
        input.removeAttribute('disabled');
        h6.className = '';
    } else {
        input.setAttribute('disabled', 'true');
        h6.className = 'notification';
        aAdd.setAttribute('disabled', 'true');
    }
}