// index.js

import './style.css';
import { data, addTask, deleteTask, editTaskDescription, loadFromLocalStorage } from './todoFunctions.js';
import { updateStatus, clearCompletedTasks } from '../modules/statusUpdates.js';

document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  populateTodoList(data.tasks);

  // ...

  // Event listener for adding a new task
  const todoInput = document.getElementById('todo-input');
  todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const description = event.target.value.trim();
      if (description !== '') {
        addTask(description);
        saveToLocalStorage();
        populateTodoList(data.tasks);
        event.target.value = '';
      }
    }
  });

  // Event listener for deleting a task when checkbox is ticked
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('change', (event) => {
    if (event.target.classList.contains('task-completed')) {
      const index = parseInt(event.target.dataset.index);
      const completed = event.target.checked;
      updateStatus(index, completed);
      if (completed) {
        addDeleteButton(index);
      } else {
        removeDeleteButton(index);
      }
      populateTodoList(data.tasks);
    }
  });

  // Event listener for clearing all completed tasks
  const clearCompletedBtn = document.getElementById('clear-completed-btn');
  clearCompletedBtn.addEventListener('click', () => {
    clearCompletedTasks();
    populateTodoList(data.tasks);
  });
});

// ...
