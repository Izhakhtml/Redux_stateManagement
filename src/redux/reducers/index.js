import { combineReducers } from "redux";
import ReducerTodos from "./todos";
import ReducerUser from "./user";
const globalReducers =
combineReducers({
    todos:ReducerTodos,
    user:ReducerUser,
})    

export default globalReducers;