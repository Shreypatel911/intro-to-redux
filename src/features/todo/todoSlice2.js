import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "todo2-text1"}, {id: 2, text: "todo2-text2"}]
}

export const todoSlice2 = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload) 
        }
    }
})

export const {addTodo, removeTodo} = todoSlice2.actions

export default todoSlice2.reducer