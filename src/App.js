import './App.css';
import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setExpression, setClear, setResult, setDelete, getFromMemory } from "./redux/calcSlice";

function App() {
  const { expression, memory } = useSelector((state) => state.calc);
  const dispatch = useDispatch();
  // conditional styling
  const condStyle={
    backgroundColor:memory.length===0?"#7BD9F6":"#0ba8e6",
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="displayInput">{expression}</div>
        <div className="row">
          <div className="button-wrapper" onClick={() => dispatch(setExpression(7))}>7</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(8))}>8</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(9))}>9</div>
          <div className="operator" onClick={() =>  dispatch(setExpression("/"))}>/</div>
        </div>
        <div className="row">
          <div className="button-wrapper" onClick={() => dispatch(setExpression(4))}>4</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(5))}>5</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(6))}>6</div>
          <div className="operator" onClick={() => dispatch(setExpression("*"))}>*</div>
        </div>
        <div className="row">
          <div className="button-wrapper" onClick={() => dispatch(setExpression(1))}>1</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(2))}>2</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(3))}>3</div>
          <div className="operator" onClick={() => dispatch(setExpression("+"))}>+</div>
        </div>
        <div className="row">
          <div className="button-wrapper" onClick={() => dispatch(setExpression("."))}>.</div>
          <div className="button-wrapper" onClick={() => dispatch(setExpression(0))}>0</div>
          <div className="button-wrapper" onClick={() => dispatch(setResult())}>=</div>
          <div className="operator" onClick={() => dispatch(setExpression("-"))}>-</div>
        </div>
        <div className="row">
          {/* clear button */}
          <div
            className="optn-btn"
            onClick={() => dispatch(setClear())}>clear </div>
          {/* delete button*/}
          <div
            className="optn-btn"
            onClick={() => dispatch(setDelete())}>delete </div>
          {/* Memory  button to see last 10 results*/}
          <div className="mem-btn" onClick={()=> dispatch(getFromMemory())} style={condStyle} >
           
           Memory</div>
         
      </div>
         

        </div>
        
    </div>
  );
}

export default App;
