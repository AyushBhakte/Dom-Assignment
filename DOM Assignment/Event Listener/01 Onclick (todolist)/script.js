document.getElementById('addTaskBtn').onclick = function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value) {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = ''; // Clear input field
    }
}
