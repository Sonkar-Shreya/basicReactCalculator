import './App.css'
import { useState } from "react"

function Calculator(){
  const [result,setResult] = useState("");
  const handleClick = (e)=>{
    setResult(result.concat(e.target.value));      
  }
  function clearDisplay(){
    setResult("");
  }
  function showResult(){
    setResult(eval(result.toString()));
  }
  return(
    <div className="calci">
      <input type="text" className="inputDisplay" value={result} ></input>
      <input type="button" value="1" className="button" onClick={handleClick}></input>
      <input type="button" value="2" className="button" onClick={handleClick}></input>
      <input type="button" value="3" className="button" onClick={handleClick}></input>
      <input type="button" value="4" className="button" onClick={handleClick}></input>
      <input type="button" value="5" className="button" onClick={handleClick}></input>
      <input type="button" value="6" className="button" onClick={handleClick}></input>
      <input type="button" value="7" className="button" onClick={handleClick}></input>
      <input type="button" value="8" className="button" onClick={handleClick}></input>
      <input type="button" value="9" className="button" onClick={handleClick}></input>
      <input type="button" value="0" className="button" onClick={handleClick}></input>
      <input type="button" value="+" className="button" onClick={handleClick}></input>
      <input type="button" value="-" className="button" onClick={handleClick}></input>
      <input type="button" value="/" className="button" onClick={handleClick}></input>
      <input type="button" value="*" className="button" onClick={handleClick}></input>
      <input type="button" value="clear" className="button" onClick={clearDisplay}></input>
      <input type="button" value="=" className="button" onClick={showResult}></input>

    </div>
  );
}

export default Calculator