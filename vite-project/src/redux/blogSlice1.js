import { createSlice } from "@reduxjs/toolkit";

export const blogSlice1 = createSlice({
    name:"blog",
    initialState:[],
    reducers:{
        submitData:(state,action)=>{
            console.log(action.payload)
            state.push(action.payload)
        }
    }
})
export const {submitData} = blogSlice1.actions