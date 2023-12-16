import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState{
    data:any
}

const initialState:CounterState={
    data:[],
}

export const counter= createSlice({
    name:'counter',
    initialState,
    reducers:{
        
    }
})

export const {}=counter.actions

export const selectCount=(state:RootState)=>state.counter.value

export default counter.reducer