import React from 'react'
import './style.css';

const ClickEvent = () => {


  // 1번 실행
  // const $btn1 = document.getElementById('btn1');
  // $btn1.onclick = e => {
  //   alert('클릭 잘 했다!');
  // };

  // 2번 실행
  // 버튼이 그려지기 전에 함수가 적용됨
  // 그래서 함수가 걸리지 않음...
  // 인라인 방식으로 걸림

  const greeting = e => {
    alert('안뇽안뇽~ㅡ크');
  };

  const changeBox = e => {
    const $box = document.querySelector('.box');
    $box.style.background = 'skyblue';
    $box.style.width = '200px';
    $box.style.height = '200px';
  };

  return (
    <>
      <button id='btn1' onClick={() => alert('클릭 잘 했다!')}>클릭해봐!</button>
      <button id='btn2' onClick={greeting}>클릭해봐!</button>
      <button id='btn3' onClick={() => {
        changeBox();
        greeting();
      }}>클릭해봐!</button>

      <div className='box'></div>
    </>
  )
}

export default ClickEvent