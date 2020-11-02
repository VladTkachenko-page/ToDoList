'use strict';

 const todoControl = document.querySelector('.todo-control'),
       headerInput = document.querySelector('.header-input'),
       todoList = document.querySelector('.todo-list'),
       todoCompleted = document.querySelector('.todo-completed');

let todoData = [];              

const render = function() {
  todoList.textContent = '';
  todoCompleted.textContent = '';
  localStorage.setItem('array', JSON.stringify(todoData));
  todoData = arrayData;
    todoData.forEach(function(item) {
      
      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
      '<div class="todo-buttons">' +
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>' +
      '</div>';

      if (item.completed) {
        todoCompleted.append(li);
      } else {
        todoList.append(li);
      };

      const btnTodoComplete = li.querySelector('.todo-complete');
      btnTodoComplete.addEventListener('click', function() {
        item.completed = !item.completed;
        render();
      });
      const btnTodoRemove = li.querySelector('.todo-remove');
      btnTodoRemove.addEventListener('click', function() {
        todoData.splice(item, 1);
        render();
      });
    });
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    
    const newTodo = {
      value: headerInput.value.trim(),
      completed: false
    };

    if (headerInput.value.trim() === '') {
      headerInput.value = '';
      return false;
    } else {
      todoData.push(newTodo);
      render();
      headerInput.value = '';
    }
  });
  let arrayData = JSON.parse(localStorage.getItem('array'));  
  todoData = arrayData;
  render();