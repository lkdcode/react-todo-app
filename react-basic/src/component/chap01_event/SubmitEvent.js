import React from 'react'

// 새로고침돼서 form 을 쓰되 submit 을 보내면 안 됨

const SubmitEvent = () => {
  

  // 버튼에 onClick 걸어도 됨
  // REST 방식은 form 이 아예 필요가 없음 onClick 으로 하는건가?
  const send = e => {
    e.preventDefault(); // submit 기능 중지
    // fetch()
    
    const $nick = document.getElementById('nickName');
    console.log($nick.value);
  };

  const buttonStyle = {
    // key : value 쌍으로
    // camelCase 로
    color : 'red',
    backgroundColor : 'orange',
    fontSize : '1.5em'
  };


  return (
    <form onSubmit={send}>
        <input type='text' id='nickName' name='nick' />
        <button style={buttonStyle} type='submit'>확인</button>
    </form>
  )
}

export default SubmitEvent