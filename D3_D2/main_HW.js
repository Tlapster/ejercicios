

const tasksContainer = document.getElementById('tasksContainer');

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

