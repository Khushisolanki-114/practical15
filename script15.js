document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage on page load
    loadTasks();

    // Event listener to add a task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = ''; // Clear the input
        }
    });

    // Event listener to clear all tasks
    clearTasksBtn.addEventListener('click', () => {
        clearAllTasks();
    });

    function addTask(task) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);

        // Save task to local storage
        saveTaskToLocalStorage(task);
    }

    function saveTaskToLocalStorage(task) {
        const tasks = getTasksFromLocalStorage();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = getTasksFromLocalStorage();
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    function getTasksFromLocalStorage() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    function clearAllTasks() {
        localStorage.removeItem('tasks'); // Clear local storage
        taskList.innerHTML = ''; // Clear the task list
    }
});
