import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{}
}

const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers: {
        addTaskToList:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskInList:(state,action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
        },
        setSelectedTask:(state,action) => {
            state.selectedTask = action.payload
        }

    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer