import { configureStore } from "@reduxjs/toolkit";
import { blogSlice1 } from "../redux/blogSlice1";


export const store1 = configureStore({
    reducer:{
        blog:blogSlice1.reducer
    }
})