import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import todoReducer2 from "../features/todo/todoSlice2";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        todo2: todoReducer2
    }
}) 