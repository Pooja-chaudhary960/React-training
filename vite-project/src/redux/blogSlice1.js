import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../local/local";

export const blogSlice1 = createSlice({
    name:"blog",
    initialState:{
        posts:getItem()
    },
    reducers:{
        submitData:(state,action)=>{
            console.log(action.payload)
            state.posts.push(action.payload)
            setItem(state.posts)
        }
    }
})
export const {submitData} = blogSlice1.actions