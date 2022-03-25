import { createStore, combineReducers } from "redux";
import todoReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composeRedux = composeWithDevTools()

const rootReducer = combineReducers({
    todoList: todoReducer
})

const store = createStore(rootReducer, composeRedux)

export default store