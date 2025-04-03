// Global Variables
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask")
let taskList = document.getElementById("taskList")

// Create List Item Function
function createListItem(taskText) {
    // New <li> element
    let listItem = document.createElement('li');
    // Set <li> text to be 'taskText'
    listItem.textContent = taskText;
    // Return new <li> element
    return listItem;
}

// Create Add Task Function
function addTask() {
    // Get value of task input
    const taskText = taskInput.value;
    // Only add the task if not empty
    if (taskText) {
        // Create and save the new <li> element
        const listItem = createListItem(taskText);
        // Append <li> element to task list <ul>
        taskList.appendChild(listItem);
        // Clear the input
        taskInput.value = '';
        // Attach click handler to toggle complete function
        listItem.addEventListener("click", toggleComplete)
    }
}

// Create Toggle Complete Function
function toggleComplete(e) {
    // Adds / Removes complete class from <li> element
    this.classList.toggle("complete");
}

// Add event listener to the add task button
addTaskButton.addEventListener("click", addTask);
