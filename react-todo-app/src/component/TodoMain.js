import React from 'react'
import TodoItem from './TodoItem'

import './SCSS/TodoMain.scss';

const TodoMain = ({ todoList }) => {

  // const todoItems = todoList.map(todo => <TodoItem />);

  // const renderTodoItem = () => {
  //   const todoItems = [];

  //   for (const todo of todoList) {
  //     todoItems.push(<TodoItem />);
  //   }

  //   return todoItems;
  // };

  return (
    <ul className='todo-list'>
      {
        todoList.map(todo => <TodoItem item={todo} />)
      }
    </ul>
  )
}

export default TodoMain