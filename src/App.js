import './App.css'
import { useState } from "react"
import Buttons from './Button'

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
      {/*<input type="button" value="1" className="button" onClick={handleClick}></input>
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
      <input type="button" value="=" className="button" onClick={showResult}></input> */}
      <Buttons value="1" func={handleClick} />
      <Buttons value="2" func={handleClick} />
      <Buttons value="3" func={handleClick} />
      <Buttons value="4" func={handleClick} />
      <Buttons value="5" func={handleClick} />
      <Buttons value="6" func={handleClick} />
      <Buttons value="7" func={handleClick} />
      <Buttons value="8" func={handleClick} />
      <Buttons value="9" func={handleClick} />
      <Buttons value="0" func={handleClick} />
      <Buttons value="+" func={handleClick} />
      <Buttons value="-" func={handleClick} />
      <Buttons value="*" func={handleClick} />
      <Buttons value="/" func={handleClick} />
      <Buttons value="=" func={handleClick} />
      <Buttons value="clear" func={handleClick} />
    
    </div>
  );
}

export default Calculator