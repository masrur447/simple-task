import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [],
}



const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        },

        updateTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id)

            if (task) {
                task.name = action.payload.name
                task.title = action.payload.title
                task.description = action.payload.description
                task.status = action.payload.status
                task.updated_at = new Date().toString()
            }

            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)

            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        }
    }
})


export const { addTask, updateTask, deleteTask } = TaskSlice.actions
export default TaskSlice.reducer