    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import axios from "axios";

    export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
        const response = await axios.get("http://localhost:3333/todos");
        return response.data;
    })

    const todoSclice = createSlice({
        name : "todo",
        initialState : [],
        reducers : {},
        extraReducers : (builder) => {
            builder.addCase(fetchTodos.fulfilled, (state, action) => {
              return action.payload
            })
        }
    })


    // export const {addTodo} = todoSclice.actions
    export default todoSclice.reducer