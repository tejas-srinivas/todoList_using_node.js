import React, { useEffect } from 'react'
import { getAllTodos } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type'

import Tabs from './tabs'

function Todos() {

  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos)
  const currentTab = useSelector(state => state.currentTab)

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  const getTodos = () => {
    if(currentTab === ALL_TODOS){
      return todos
    }
    else if(currentTab === ACTIVE_TODOS){
      return todos.filter(todo => !todo.done)
    } 
    else if(currentTab === DONE_TODOS){
      return todos.filter(todo => todo.done)
    } 
  }
    
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab}/>
      </div>
        <ul>
            {
                getTodos().map(todo => (
                     <Todo id={todo._id} todo={todo}/>
                ))
            }
        </ul>
    </article>
  )
}

export default Todos