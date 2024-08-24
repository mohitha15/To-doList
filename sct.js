let taskList = [];
let taskCounter = 1;

document.getElementById('save-btn').addEventListener('click', addTask);
document.getElementById('filter-tasks').addEventListener('change', renderTasks);

function addTask() {
    const taskInput = document.getElementById('task-input').value;

    if (taskInput.trim() !== "") {
        taskList.push({ id: taskCounter, task: taskInput, status: 'Pending' });
        taskCounter++;
        renderTasks();
    }

    document.getElementById('task-input').value = '';
}

function renderTasks() {
    const filter = document.getElementById('filter-tasks').value;
    const filteredTasks = taskList.filter(task => filter === 'All' || task.status === filter);
    const taskListEl = document.getElementById('task-list');
    taskListEl.innerHTML = '';

    filteredTasks.forEach((task, index) => {
        const taskRow = document.createElement('tr');
        taskRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.task}</td>
            <td>${task.status}</td>
            <td>
                <button class="finish-btn" onclick="finishTask(${task.id})">FINISH</button>
                <button class="edit-btn" onclick="editTask(${task.id})">EDIT</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">DELETE</button>
            </td>
        `;
        taskListEl.appendChild(taskRow);
    });
}

function finishTask(id) {
    taskList = taskList.map(task => task.id === id ? { ...task, status: 'Completed' } : task);
    renderTasks();
}

function editTask(id) {
    const newTask = prompt("Edit your task:", taskList.find(task => task.id === id).task);
    if (newTask !== null) {
        taskList = taskList.map(task => task.id === id ? { ...task, task: newTask } : task);
        renderTasks();
    }
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    renderTasks();
}
