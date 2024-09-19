import { createSlice } from "@reduxjs/toolkit";

const todoSclice = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        addTodo : (state, action) => {
            state.push(action.payload)
        }
    }
})


export const {addTodo} = todoSclice.actions
export default todoSclice.reducer