
import './App.css';
//import Comp1 from './components/Comp1';
//import Counter from './components/Counter';
import { useState } from 'react';
function App1() {
  // const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber]=useState([1,2,3,4]);
  const[auth, setAuth]=useState(false);
  const randomNumber=()=>{
    const random = Math.round(Math.random()*100);
    setNumber([...number, random])
  }
  return (
    <div className="App">
      {number.map((num)=><span>{num},</span>)}

{auth ? <h2>Witaj w panelu</h2>:<h2>Odmowa dostępu</h2>}
<button onClick={()=>setAuth(!auth)}>{auth ? "Wyloguj":"Zaloguj"}</button>

      <button onClick={randomNumber}>Losuj</button>
      {/* <button onClick={()=>setIsVisible(!isVisible)}>Zmień</button>
      <Counter num={3} />
      <Counter num={2}/>
      <Counter num={5}/>
      <Counter num={-3}/> */}
    </div>
  );
}

export default App1;
