// modules/statusUpdates.js

import { data, saveToLocalStorage } from '../src/todoFunctions.js';

// Function to update the status of a task (completed: true / false)
export function updateStatus(index, completed) {
  data.tasks[index - 1].completed = completed;
  saveToLocalStorage();
}

// Function to clear all completed tasks using filter()
export function clearCompletedTasks() {
  data.tasks = data.tasks.filter((task) => !task.completed);
  saveToLocalStorage();
}
