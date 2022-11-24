import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    expression: [],
    memory:[],
  },
  reducers: {
    setExpression: (state, action) => {
      // To add the user input to expression for calculation
      state.expression = [...state.expression,action.payload];
    },
    setClear: (state) => {
       // To clear the user input
      state.expression = [];
    },
    setResult: (state) => {
      // To calculate the result of formed expression on pressing "="
      let temp= state.expression.join("");
      try{
      let result=eval(temp);
      state.expression = [result];
      temp=temp+"="+result;
      // To store only the latest 10 data of user calculation
      if(state.memory.length>=10){
          let temp2=[...state.memory].slice(1);
          temp2.push(temp)
          state.memory=[...temp2];
      }
      // To store only data of user calculation
      else state.memory=[...state.memory,temp]

      }catch(error){
        state.expression = ["error"];
      }
    },
    setDelete: (state) => {
      // To delete/clear the last 1 digit entered
      let temp=state.expression;
      if(temp.length>0) temp.pop();
      state.expression =temp;
    },
    getFromMemory: (state) => {
       // To retrive the data of previous calculations from memory
       if(state.memory.length>0)
        state.expression = state.memory.pop();
        else
        state.expression = [];
    },
  },
});

export const { setExpression,
        setClear,
        setResult,
        setDelete,
        getFromMemory,
  } = calcSlice.actions;

export default calcSlice.reducer;
