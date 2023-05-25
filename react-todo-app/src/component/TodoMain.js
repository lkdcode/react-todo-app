import React from 'react'
import TodoItem from './TodoItem'

import './SCSS/TodoMain.scss';

const TodoMain = ({ todoList, remove }) => {

  // const todoItems = todoList.map(todo => <TodoItem />);

  // const renderTodoItem = () => {
  //   const todoItems = [];

  //   for (const todo of todoList) {
  //     todoItems.push(<TodoItem />);
  //   }

  //   return todoItems;

  const submitHandler = e => {

    const $input = document.querySelector('.insert-from input');
    console.log($input.value);

    $input.value = '';

  }

  // };

  return (
    <ul className='todo-list'>
        {
            todoList.map(todo => <TodoItem
                                  key={todo.id}
                                  item={todo}
                                  remove={remove} 
                                  />)
        }
    </ul>
  )
}

export default TodoMain