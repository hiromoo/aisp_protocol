let token = localStorage.getItem('jwt_token') || '';
let todos = [];

function showLogin(show) {
  document.getElementById('login-area').style.display = show ? '' : 'none';
  document.getElementById('todo-area').style.display = show ? 'none' : '';
}

function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) return alert('Username required');
  fetch('http://localhost:3001/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        token = data.token;
        localStorage.setItem('jwt_token', token);
        showLogin(false);
        fetchTodos();
      } else {
        alert('Login failed');
      }
    });
}

function logout() {
  token = '';
  localStorage.removeItem('jwt_token');
  showLogin(true);
}

function fetchTodos() {
  fetch('http://localhost:3001/api/todo', {
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(res => {
      if (res.status === 401 || res.status === 403) {
        logout();
        return [];
      }
      return res.json();
    })
    .then(data => {
      todos = data || [];
      renderTasks();
    });
}

function addTask() {
  const input = document.getElementById('new-task');
  const title = input.value.trim();
  if (!title) return;
  fetch('http://localhost:3001/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ title })
  })
    .then(res => res.json())
    .then(todo => {
      todos.push(todo);
      input.value = '';
      renderTasks();
    });
}

function toggleTask(index) {
  const todo = todos[index];
  fetch(`http://localhost:3001/api/todo/${todo.id}`, {
    method: 'PATCH',
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(res => res.json())
    .then(updated => {
      todos[index] = updated;
      renderTasks();
    });
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  todos.forEach((task, index) => {
    const item = document.createElement('li');
    item.textContent = task.title;
    item.style.textDecoration = task.done ? 'line-through' : 'none';
    item.onclick = () => toggleTask(index);
    list.appendChild(item);
  });
}

window.onload = function () {
  if (token) {
    showLogin(false);
    fetchTodos();
  } else {
    showLogin(true);
  }
};
