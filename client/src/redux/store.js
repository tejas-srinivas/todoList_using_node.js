import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {todosReducers} from './reducers/todosReducers'
import { tabReducer } from './reducers/tabReducer'

//Frontend database = Redux
//frontend database to store states
const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})

const middleware = [thunk]

//pass 2 arguments for store 1.reducer 2.middleware
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store