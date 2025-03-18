import Asbutton from "./asbutton";
import { useState } from "react";

function App(){
 
   let [count, setCount] = useState(0);
    const increaseCount =()=>{
      setCount(count+1);
    }

    function decreaseCount(){
      return setCount(count-1);
    
    }
  return <div>
    <h1>Count : {count}</h1>
    <button onClick={increaseCount}>increase</button>
    <button onClick={decreaseCount}>decrease</button>
  </div>

}

export default App;