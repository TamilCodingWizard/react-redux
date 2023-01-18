import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{},
    isLoading:false,
    error:''
}

//GET
export const getTasksFromServer = createAsyncThunk(
    "tasks/getTasksFromServer",
    async (_,{rejectWithValue}) => {
        const response = await fetch('http://localhost:8000/tasks')
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'No Tasks Found'})
        }
    }
)

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

    },
    extraReducers:(builder) => {
        builder
            .addCase(getTasksFromServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(getTasksFromServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.tasksList = action.payload
            })
            .addCase(getTasksFromServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
                state.tasksList = []
            })
    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer