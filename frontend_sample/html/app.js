window.onload = function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  let tasks = [];

  function render() {
    taskList.innerHTML = "";
    tasks.forEach((task, idx) => {
      const li = document.createElement("li");
      li.textContent = task.title;
      if (task.done) li.style.textDecoration = "line-through";
      li.style.cursor = "pointer";
      li.onclick = function () {
        tasks[idx].done = !tasks[idx].done;
        render();
      };
      taskList.appendChild(li);
    });
  }

  addButton.onclick = function () {
    const title = taskInput.value.trim();
    if (!title) return;
    tasks.push({ title, done: false });
    taskInput.value = "";
    render();
  };

  render();
};
