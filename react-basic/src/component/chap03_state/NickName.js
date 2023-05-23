import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NickName = props => {

  // React.useState();
  // 배열을 리턴 함
  // useState 훅은 배열을 리턴하는데 
  // 0번에는 상태 변수 값
  // 1번에는 상태 변수 값을 변경하는 setter 가 들어있음
  
  // const statement = useState('김철수');
  const [nickName, setNickName] = useState('김철수');

  // const nickName = statement[0];
  // const setNickName = statement[1];

  // console.log(statement);

  // let nickName = '김철수';

  const changeNickName = e => {
    console.log('changeNickName !! call!!');
    console.log(nickName);

    // nickName = '척척박사';
    setNickName('척척박사');
  }

  return (
    <>
      <h1>Hello ~~~ {nickName}</h1>
        <button className ='btn' onClick={changeNickName}>척척박사</button>
        <button className ='btn' onClick={() => setNickName('척척석사')}>척척석사</button>
    </>
  )

}

NickName.propTypes = {}

export default NickName