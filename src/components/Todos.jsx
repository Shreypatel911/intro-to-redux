import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo  } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todo2.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>X</button> 
                    {/* in click had to give reference to a function can't put function with () and call it */}
                </li>
            ))}
        </>
    )
}

export default Todos