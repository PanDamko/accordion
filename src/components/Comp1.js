import React from 'react'
import { useState } from 'react';

const Comp1 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [secondCounter, setSecondCounter] = useState(0);

  let counter = 0;

  const increase = () => {
    console.log(counter)
    counter++
  }

  console.log("re-render")

  return (
    <div>
      <h3>{counter} {secondCounter}</h3>
      <button onClick={()=>setSecondCounter(secondCounter+1)}>Zwiększ counter w state</button>
      <button onClick={increase}>Zwiększ</button>
      <button onClick={()=> setIsVisible(!isVisible)}>Zmień</button>
    </div>
  )
}

export default Comp1