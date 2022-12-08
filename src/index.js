document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    newTask(e.target.new_todo.value);
    form.reset();
  })
});

function newTask(task) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTask);
  btn.textContent = 'x';
  li.textContent = task + '  ';
  li.appendChild(btn);
  document.querySelector('ol').appendChild(li);
}

function deleteTask(e) {
  e.target.parentNode.remove();
}