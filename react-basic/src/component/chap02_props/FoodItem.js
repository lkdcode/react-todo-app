import React from 'react'

const FoodItem = ({foodId: id, foodName: name, price}) => {

  return (
    
    <li id="{id}}"> {name} ({price}원)</li>

  )
}

export default FoodItem