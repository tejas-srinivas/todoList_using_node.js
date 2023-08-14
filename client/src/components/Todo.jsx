import React from 'react'
import { toggleTodo, editTodo, deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function Todo({ todo }) {
    
    const [editing,setEditing] = useState(false)
    const [text,setEditText] = useState(todo.data)
    
    const dispatch = useDispatch();

    const onEditFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState)
        dispatch(editTodo(todo._id,text))
    }

    return (
    <li className='task' onClick={()=> dispatch(toggleTodo(todo._id))}
        style={{textDecoration: todo.done ? 'line-through' : '',
            color: todo.done ? '#454545' : '#34495e'
            }}>

        <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>
        
        <form onSubmit={onEditFormSubmit} style={{ display: editing ? 'inline' : 'none' }}>
            <input type="text" value={text} className='edit__todo' onChange={(e) => setEditText(e.target.value)}/>
        </form>
        
        <span className='icon' onClick={() => dispatch(deleteTodo(todo._id))}>
            <i class="fa-regular fa-trash-can"></i>
        </span>
        <span className='icon' onClick={() => setEditing(prevState => !prevState)}>
        <i class="fa-regular fa-pen-to-square"></i>
        </span>
        {/* <div className="line2"></div> */}
    </li>
  )
}

export default Todo