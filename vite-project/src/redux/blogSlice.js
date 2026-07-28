import { createSlice } from "@reduxjs/toolkit";


export const blogSlice = createSlice({
    name:"blog",
    initialState:[],
    reducers:{
        addData : (state,action) =>{
         console.log(action.payload)
         state.push(action.payload)
        }
    }
})
export const {addData} = blogSlice.actions