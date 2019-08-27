const $loader = document.querySelector('.loaders');
const userList = document.getElementById('list');

$loader.classList.toggle('hide');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    $loader.classList.toggle('hide');
    myJson.forEach(user => {
      const li = document.createElement('li');
      const id = user.id;
      li.setAttribute('data-id', id);

      li.innerHTML = `
        <span class="user">${user.name}</span>
        <a class="btn-edit" href="#edit/${id}" data-id="${id}">Edit</a>
        <a class="btn-remove" href="#remove/${id}">Remove<a/>
      `;
      userList.appendChild(li);
    });

    const buttonsEdit = document.querySelectorAll(".btn-edit");

    buttonsEdit.forEach(btn => {
      btn.addEventListener('click', function() {
        addForm(parseInt(btn.parentElement.getAttribute('data-id')));
      });  
    });

    const buttonsRemove = document.querySelectorAll(".btn-remove");

    buttonsRemove.forEach(btn => {
      btn.addEventListener('click', function() {
        removeUser(parseInt(btn.parentElement.getAttribute('data-id')));
      });  
    });
  });

function addForm(id) {
  $loader.classList.toggle('hide');
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(user) {
      $loader.classList.toggle('hide');
      if ('content' in document.createElement('template')) {
        let $template = document.querySelector('#edit-form');

        $template.content.querySelector("#name").value = user.name;
        $template.content.querySelector("#username").value = user.username;
        $template.content.querySelector("#phone").value = user.phone;
        $template.content.querySelector("#website").value = user.website;
        $template.content.querySelector("#email").value = user.email;

        const clone = document.importNode($template.content, true);
        const $li = document.querySelector(`[data-id="${id}"]`)
        $li.appendChild(clone);
        cancel($li);
        save($li);
      } 
    });
}

function cancel($li) {
  const $btnCancel = $li.querySelector('.btn-cancel');

  $btnCancel.addEventListener('click', function() {
    $li.querySelector('form').remove();
  });
}

function save($li) {
  const $btnSave = $li.querySelector('.btn-save');
  
  $btnSave.addEventListener('click', function() {
    const id = $li.getAttribute('data-id');

    const $form = $li.querySelector('form');
    const data = {
      name: $form.name.value,
      username: $form.username.value,
      phone: $form.phone.value,
      email: $form.email.value,
      website: $form.website.value
    };
    $loader.classList.toggle('hide');
    
    fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    .then(response => response.json())
    .then(user => {
      $loader.classList.toggle('hide');
      $li.querySelector('form').remove();
      $li.querySelector('span.user').textContent = user.name;
    });
  });
}

function removeUser(id) {
  $loader.classList.toggle('hide');
  fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({status: `User (id = ${id}) is removed`})
    })
  .then(response => response.json())
  .then(data => {
    $loader.classList.toggle('hide');
    document.querySelector(`li[data-id="${id}"]`).remove();
  });
}
