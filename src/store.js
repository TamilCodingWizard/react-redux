import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './slices/tasksSlice'


export const store = configureStore({
    reducer: {
        tasks:tasksReducer
    }
})