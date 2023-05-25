import React, { useState, useEffect } from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './SCSS/TodoTemplate.scss';

const TodoTemplate = () => {

  // 서버에 할 일 목록 (json) 을 요청해서 받아와야 함
  // todos 배열을 상태 관리
  const [todos, setTodos] = useState([
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
  ]);

  // id 값 시퀀스 생성 함수
  const makeNewId = () => {
    if (todos.length === 0) return 1;
    return todos[todos.length - 1].id + 1;
  }

  // todoInput 에게 todoText 를 받아오는 함수
  const addTodo = todoText => {
    console.log('할 일 정보 : ', todoText);
    
    const newTodo = {
      id: makeNewId(),
      title: todoText,
      done: false
    }
    
    // todos.push(newTodo);
    // 리액트의 상태변수는 무조건 setter 를 통해서만
    // 상태 값을 변경해야 렌더링에 적용된다.
    // 다만 상태변수가 불변성(immutable)을 가지기 때문에
    // 기존의 상태에서 변경이 불가능하고 
    // 새로운 상태를 만들어서 변경해야 한다.
    // const copyTodos = todos.slice();
    // copyTodos.push(newTodo);

    setTodos([... todos, newTodo]);

  };


  // 할 일 삭제 처리 함수
  const removeTodo = id => {

    // console.log(`삭제 대상 id: ${id}`);

    // let idx;

    // for (let i = 0; i < todos.length; i++) {
    //   if (id === todos[i].id) {
    //     idx = i;
    //     break;
    //   }
    // }

    // const copyTodos = [...todos];
    // copyTodos.splice(idx, 1);

    // setTodos(copyTodos);

    setTodos(todos.filter(todo => todo.id !== id));

  };

  // 할 일 체크 처리 함수
// 할 일 체크 처리 함수
    const checkTodo = id => {
      // console.log(`체크한 Todo id: ${id}`);

      // const copyTodos = [...todos];
      // for (const cTodo of copyTodos) {
      //   if (cTodo.id === id) {
      //     cTodo.done = !cTodo.done;
      //   }
      // }
      // setTodos(copyTodos);

      setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));

      };

      // 체크가 안 된 할 일의 갯수 카운트하기
      const countRestTodo = () => todos.filter(todo => !todo.done).length;
      

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='TodoTemplate'>
      <TodoHeader count={countRestTodo} />
      <TodoMain 
        todoList={todos}
        remove ={removeTodo}
        check={checkTodo}
      />
      <TodoInput addTodo={addTodo} />
    </div>
  )
}

export default TodoTemplate