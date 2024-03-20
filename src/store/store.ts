import { configureStore } from "@reduxjs/toolkit";
import {todo} from './todoSlice'
export const store = configureStore({
    reducer: {
        todo,
    }
})

export type TStore = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch