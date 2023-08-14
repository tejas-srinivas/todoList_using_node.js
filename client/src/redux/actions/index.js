import axios from 'axios'
import { ADDNEW_TODO,GETALL_TODO,TOGGLE_TODO,EDIT_TODO, DELETE_TODO, TOGGLE_TAB} from './type'
//backend server
const API_URL = 'http://localhost:8000'

//asynchrous call, so use try and catch
export const addNewTodo = (data) => async(dispatch) =>{
    try{
        const res = await axios.post(`${API_URL}/todos`,{data})
        //payload will be passed to action parameter in todosReducers
        dispatch({ type: ADDNEW_TODO , payload:res.data })
    }
    catch (error){
        console.log('error while calling addNewTodo API', error.message)
    }
}

export const getAllTodos = () => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`)
        dispatch({ type: GETALL_TODO , payload:res.data })
    }
    catch (error){
        console.log('error while calling getAllTodo API', error.message)
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`)
        dispatch({ type: TOGGLE_TODO , payload:res.data })
    }
    catch (error){
        console.log('error while calling getAllTodo API', error.message)
    }
}

export const editTodo = (id,data) => async (dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`,{data})
        dispatch({ type: EDIT_TODO , payload:res.data })
    }
    catch (error){
        console.log('error while updating TODO', error.message)
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        dispatch({ type: DELETE_TODO , payload:res.data })
    }
    catch (error){
        console.log('error while deleting todo', error.message)
    }
}

export const toggleTab = (tab) => async (dispatch) =>{
    dispatch({type: TOGGLE_TAB , selected :tab})
}