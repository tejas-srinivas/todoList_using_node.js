import * as operation from '../actions/type'

export const tabReducer = (state = operation.ALL_TODOS,action) => {
    switch (action.type){
        case operation.TOGGLE_TAB : return action.selected
        default : return state
    }
}