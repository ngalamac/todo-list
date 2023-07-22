// todoFunctions.js

export let data = {
    tasks: []
  };
  
  // Function to add a new task
  export function addTask(description) {
    const newTask = {
      description,
      completed: false,
      index: data.tasks.length + 1
    };
    data.tasks.push(newTask);
  }
  
  // Function to delete a task
  export function deleteTask(index) {
    data.tasks.splice(index - 1, 1);
  }
  
  // Function to edit a task description
  export function editTaskDescription(index, description) {
    data.tasks[index - 1].description = description;
  }
  
  // Function to save tasks to local storage
  export function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(data.tasks));
  }
  
  // Function to load tasks from local storage
  export function loadFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    data.tasks = storedTasks || [];
  }
  