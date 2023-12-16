import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import counter from "./redusers/counterSlice" 
import { todos } from "./zapros/todos";
export const store=configureStore({
reducer:{
    counter,
    [todos.reducerPath]:todos.reducer
},
middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(todos.middleware)
}
})

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch