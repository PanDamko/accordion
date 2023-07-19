import React, { useState } from 'react'

const Counter = ({num}) => {
    const[value, setValue] = useState(1);
 

    const handleIncrease = () =>setValue(value+num);
   
    console.log("Counter rerender");
  return (
    <div>
        
        <h3>{value}</h3>
        
        <button onClick={handleIncrease}>+</button>
        
        </div>
  )
}

export default Counter