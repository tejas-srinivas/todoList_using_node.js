import * as operation from '../actions/type'

export const todosReducers = (state = [],action)=>{
    //perform switch based on type, For eg:ADDNEW_TODO

    switch(action.type){
        case operation.ADDNEW_TODO : return [action.payload, ...state]
        case operation.GETALL_TODO : return action.payload
        case operation.TOGGLE_TODO : return state.map(todo => (
                                        todo._id === action.payload._id ? { ...todo , done: !todo.done } : todo
                                    ))
        case operation.EDIT_TODO :  return state.map(todo => (
                                        todo._id === action.payload._id ? { ...todo , data : action.payload.data } : todo
                                    ))
        case operation.DELETE_TODO : return state.filter(todo => todo._id !== action.payload._id)
        default: return state
    }
}