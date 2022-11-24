import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    expression: [],
    memory:[],
  },
  reducers: {
    setExpression: (state, action) => {
      state.expression = [...state.expression,action.payload];
    },
    setClear: (state) => {
      state.expression = [];
    },
    setResult: (state) => {
      let temp= state.expression.join("");
      try{
      let result=eval(temp);
      state.expression = [result];
      temp=temp+"="+result;
      if(state.memory.length>=10){
          let temp2=[...state.memory].slice(1);
          temp2.push(temp)
          state.memory=[...temp2];
      }
      else state.memory=[...state.memory,temp]

      }catch(error){
        state.expression = ["error"];
      }
    },
    setDelete: (state) => {
      let temp=state.expression;
      if(temp.length>0) temp.pop();
      state.expression =temp;
    },
    getFromMemory: (state) => {
      state.expression = state.memory.pop();
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
