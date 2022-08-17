import "./App.css";
import { useState } from "react";
import Buttons from "./Button";

function Calculator() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  function clearDisplay() {
    setResult("");
  }
  function showResult() {
    setResult(eval(result.toString()));
  }

  const ar=[
    {
      value : 1,
      function : handleClick
    },
    {
      value : 2,
      function : handleClick
    },
    {
      value : 3,
      function : handleClick
    },
    {
      value : 4,
      function : handleClick
    },
    {
      value : 5,
      function : handleClick
    },
    {
      value : 6,
      function : handleClick
    },
    {
      value : 7,
      function : handleClick
    },
    {
      value : 8,
      function : handleClick
    },
    {
      value : 9,
      function : handleClick
    },
    {
      value : 0,
      function : handleClick
    },
    {
      value : "+",
      function : handleClick
    },
    {
      value : "-",
      function : handleClick
    },
    {
      value : "*",
      function : handleClick
    },
    {
      value : "/",
      function : handleClick
    },
    {
      value : "=",
      function : showResult
    },
    {
      value : "Clear",
      function : clearDisplay
    }
  ]
  return (
    <div className="calci">
      <input type="text" className="inputDisplay" value={result}></input>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {
          ar.map((element)=>{
            return <Buttons value={element.value} func={element.function}  />
          })
        }
         
      </div>
    </div>
  );
}

export default Calculator;
