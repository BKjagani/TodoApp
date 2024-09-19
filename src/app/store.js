import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo.features";

const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default Store;
