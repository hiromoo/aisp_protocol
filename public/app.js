const taskList = [];
function addTask() {
  const input = document.getElementById('new-task');
  const title = input.value.trim();
  if (title) {
    taskList.push({ title, done: false });
    input.value = "";
    renderTasks();
  }
}
function toggleTask(index) {
  taskList[index].done = !taskList[index].done;
  renderTasks();
}
function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = "";
  taskList.forEach((task, index) => {
    const item = document.createElement('li');
    item.textContent = task.title;
    item.style.textDecoration = task.done ? "line-through" : "none";
    item.onclick = () => toggleTask(index);
    list.appendChild(item);
  });
}
