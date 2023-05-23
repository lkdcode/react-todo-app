import React from 'react'
import FoodItem from './FoodItem'
import SayHello from '../../SayHello'

const FoodList = () => {

    // ex)
    // fetch 를 통해 음식 목록 json 을 불러옴
    const foods = {
        id: 327432,
        foodList: [
            {
                fName: '짜장면',
                price: 6000,
                id: 'chinese'
            },
            {
                fName: '해물파전',
                price: 12000,
                id: 'korean'
            },
            {
                fName: '가츠동',
                price: 8000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                price: 5000,
                id: 'korean'
            },
            {
                fName: '김밥',
                price: 500,
                id: 'korean'
            },
        ]
    };
    
  return (

    <ul>
        <SayHello>
            <a href='https://www.naver.com'>네이버 링크</a>
        </SayHello>
        <SayHello>
            <a href='https://www.google.com'>구글 링크</a>
        </SayHello>

        {
            foods.foodList.map(f => <FoodItem foodId={f.id} foodName={f.fName} price={f.price} />)
        }
    </ul>

  )
}

export default FoodList