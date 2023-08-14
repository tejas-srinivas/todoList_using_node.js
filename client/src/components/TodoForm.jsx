import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../redux/actions'
//In redux we always dispatch actions
import { useDispatch } from 'react-redux'

function TodoForm() {
  const [text,setText] = useState("")

  const dispatch = useDispatch();

  const onFormSubmit = (e)=>{
      e.preventDefault();
      //this will immediately call index.js in reducers
      dispatch(addNewTodo(text));
      setText('')
  }

  const onInputChange = (event)=> {
    setText(event.target.value)
    
  }
  
  return (
    <div className="form__container">
      <form className='form'>
        <input type="text" 
          placeholder='Enter new Todo...' 
          className="input" onChange={onInputChange} value={text}/>
         {/* <i class="fa-solid fa-plus" style="color: #1a386b;"></i>  */}
         <div className="add__icon" onClick={onFormSubmit}>
          <i className="fa-solid fa-plus"></i>
         </div>
      </form>
    </div>
  )
}

export default TodoForm