import React, { useState, useEffect } from 'react'

const Counter = () => {

  // let number = 0;

  const [number, setNumber] = useState(0);
  const [nick, setNick] = useState('익명');

  const increase = () => { setNumber(number + 1); };
  const decrease = () => { setNumber(number - 1); };

  const changeNick = () => { setNick('김철수'); };

  

  useEffect(() => {
    // 화면이 처음 렌더링될 때 서버 api 호출하는 경우
    // 처음 1번만 호출하고 또 할 필요가 있을까??
    console.log('3. useEffect Call !!');
    console.log(`4. nick: ${nick}, number: ${number}`);
  }, [nick]);


  
  console.log('1. component function execute!');



  return (
    <>
      {console.log('2. redered html !!')}
      <h1>닉네임 : {nick}</h1>
      <h2>{number}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={changeNick}>변경</button>
    </>
  )
}

export default Counter