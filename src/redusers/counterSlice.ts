import { createSlice } from "@reduxjs/toolkit";


  // interface State{
    
  // }
  
  interface ActionPayload {
    type: any;
    settype: any; // замените any на конкретный тип
  }

interface CounterState{
    inpadd:string
    inpadd1:string
    inpedd:string,
    inpedd1:string,
    idx:number |undefined,
}

const initialState:CounterState={
    inpadd:"",
    inpadd1:"",
    inpedd:"",
    inpedd1:"",
    idx:undefined,

}

export const counter= createSlice({
    name:'counter',
    initialState,
    reducers:{

        handleChange:(state,action:{payload:ActionPayload})=>{
           state[action.payload.type]=action.payload.settype
        }
        
        
    }
})

export const {handleChange}=counter.actions


export default counter.reducer