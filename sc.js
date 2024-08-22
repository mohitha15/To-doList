let taskList = [];
let taskCounter = 1;

document.getElementById('save-btn').addEventListener('click', addTask);
document.getElementById('get-tasks-btn').addEventListener('click', getTasks);

function addTask() {
    const taskInput = document.getElementById('task-input').value;

    if (taskInput.trim() !== "") {
        taskList.push({ id: taskCounter, task: taskInput, status: 'In progress' });
        renderTasks();
        taskCounter++;
    }

    document.getElementById('task-input').value = '';
}

function getTasks() {
    renderTasks();
}

function renderTasks() {
    const taskListEl = document.getElementById('task-list');
    taskListEl.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskRow = document.createElement('tr');

        taskRow.innerHTML = `
            <td class="mdl-data-table__cell--non-numeric">${index + 1}</td>
            <td class="mdl-data-table__cell--non-numeric">${task.task}</td>
            <td>${task.status}</td>
            <td class="mdl-data-table__cell--non-numeric">
                <button class="delete-btn" onclick="deleteTask(${task.id})">DELETE</button>
                <button class="finish-btn" onclick="finishTask(${task.id})">FINISHED</button>
            </td>
        `;

        taskListEl.appendChild(taskRow);
    });
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    renderTasks();
}

function finishTask(id) {
    taskList = taskList.map(task => task.id === id ? { ...task, status: 'Completed' } : task);
    renderTasks();
}
