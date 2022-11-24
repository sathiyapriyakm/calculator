import './App.css';
import React, { useState } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { setExpression,setClear,setResult,setDelete,getFromMemory } from "./redux/calcSlice";

function App() {


const { expression,memory } = useSelector((state) => state.calc);
const dispatch = useDispatch();

// const [input,setInput]=useState("");
// const [expression,setExpression]=useState([]);


const addToInput = val => {
  // setInput(val);
    // setExpression([...expression, val]);
    dispatch(setExpression(val));
};
const handleClear=()=>{
  // setInput("");
  dispatch(setClear());
  // setExpression([]);
}
const handleDel=()=>{
  dispatch(setDelete());
  // setInput("");
  // let temp=expression;
  // temp.pop()
  // setExpression(temp);
}

const handleMemory=()=>{
  dispatch(getFromMemory());
}

const handleEqual = () => {
  dispatch(setResult());
    // const result = expression
    //   .join("")
    //   .split(/(\D)/g)
    //   .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
    //   .reduce((acc, value, index, array) => {
    //     switch (value) {
    //       case "+":
    //         return (acc = acc + array[index + 1]);
    //       case "-":
    //         return (acc = acc - array[index + 1]);
    //       case "x":
    //         return (acc = acc * array[index + 1]);
    //       case "÷":
    //         return (acc = acc / array[index + 1]);
    //       default:
    //         return acc;
    //     }
    //   });
    // const temp= expression.join("");
    // try{
    // const result = eval(temp).toFixed(5);
   
    //   // setInput(result);
    //   setExpression([result]);
    // }
    // catch(error){
    //   setExpression(["error"]);
    // }
    
};

  return (
    <div className="app">
        <div className="calc-wrapper">
          {/* <Input input={input} /> */}
          <div className="input">{expression}</div>
          {/* <div className="expression">{expression}</div> */}
          <div className="row">
            <div  className="button-wrapper" onClick={()=>addToInput(7)}>7</div>
            <div  className="button-wrapper" onClick={()=>addToInput(8)}>8</div>
            <div  className="button-wrapper" onClick={()=>addToInput(9)}>9</div>
            <div  className="operator" onClick={()=>addToInput("/")}>/</div>
          </div>
          <div className="row">
            <div  className="button-wrapper" onClick={()=>addToInput(4)}>4</div>
            <div  className="button-wrapper" onClick={()=>addToInput(5)}>5</div>
            <div  className="button-wrapper" onClick={()=>addToInput(6)}>6</div>
            <div  className="operator" onClick={()=>addToInput("*")}>*</div>
          </div>
          <div className="row">
            <div  className="button-wrapper" onClick={()=>addToInput(1)}>1</div>
            <div  className="button-wrapper" onClick={()=>addToInput(2)}>2</div>
            <div  className="button-wrapper" onClick={()=>addToInput(3)}>3</div>
            <div  className="operator" onClick={()=>addToInput("+")}>+</div>
          </div>
          <div className="row">
            <div  className="button-wrapper" onClick={()=>addToInput(".")}>.</div>
            <div  className="button-wrapper" onClick={()=>addToInput(0)}>0</div>
            <div  className="button-wrapper" onClick={() => handleEqual()}>=</div>
            <div  className="operator" onClick={()=>addToInput("-")}>-</div>
          </div>
          <div className="row">
            {/* clear button */}
          <div className="clear-btn" onClick={()=>handleClear()}>clear </div>
            {/* delete button*/}
            <div className="del-btn" onClick={()=>handleDel()}>delete </div>
            {/* delete button*/}
            <div className="memory-btn" onClick={()=>handleMemory()} disabled={memory.length < 1} >Memory </div>

          </div>
        </div>
      </div>
  );
}

export default App;
