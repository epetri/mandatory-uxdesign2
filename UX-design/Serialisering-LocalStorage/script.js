let todos = JSON.parse(localStorage.getItem('todos') || '[]');
const todoText = document.querySelector('#todoText');
const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const recipe = document.querySelector('#recipe');
const removeAllDone = document.querySelector('#removeAllDone');
const h3 = document.querySelector('h3');

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function render() {
  todoList.innerHTML = '';

  for (let i = 0; i < todos.length; i += 1) {
    const todo = todos[i];
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${i}`;
    checkbox.checked = todo.completed;
    listItem.appendChild(checkbox);

    checkbox.addEventListener('change', function (event) {
      todo.completed = event.target.checked;
      save();
    });

    h3.textContent = recipe.value;
    const label = document.createElement('label');
    label.textContent = todo.text;
    label.setAttribute('for', `checkbox-${i}`);
    listItem.appendChild(label);

    todoList.appendChild(listItem);
  }

  if (todos.length === 0) {
    todoList.textContent = 'Add some recipes!';
  }
}

render();

removeAllDone.addEventListener('click', () => {
  todos = todos.filter(x => !x.completed);
  save();
  render();
});

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = todoText.value;

  if (text.length === 0) {
    return;
  }

  todoText.value = '';

  todos.push({
    text: text,
    completed: false,
  });

  save();
  render();
});
