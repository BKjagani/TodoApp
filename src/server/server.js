import axios from "axios";

const API = "http://localhost:3333/todos"

const addTodo = async(todo) => {
    try {
        return await axios.post(API, todo)
    } catch (error) {
        console.log("Error While add todo", error)
    }
}


export {addTodo}