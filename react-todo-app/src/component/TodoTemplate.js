import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './SCSS/TodoTemplate.scss';

const TodoTemplate = () => {

  // 서버에 할 일 목록 (json) 을 요청해서 받아와야 함
  const todos = [
    {
      id: 1,
      title: '아침 산책하기',
      done: false
    },
    {
      id: 2,
      title: '점심 산책하기',
      done: true
    },
    {
      id: 3,
      title: '저녁 산책하기',
      done: false
    },
    {
      id: 4,
      title: '새벽 산책하기',
      done: false
    },
  ];


  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain todoList={todos} />
      <TodoInput />
    </div>
  )
}

export default TodoTemplate