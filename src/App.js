import React, {useState} from "react";
import './style.css'
const App = () => {
  const [number, setNumber] = useState(1)
 return <div>
  <h1><b>Simple counter App</b></h1>
  <h2>{number}</h2>
  <button onClick={() => setNumber(number+1)} className="button">Add</button>
  <button onClick={()=> setNumber(number-1)} className="button">Less</button>
  <button onClick={()=> setNumber(0)} className="button">Reset</button>
 </div>
}


export default App;