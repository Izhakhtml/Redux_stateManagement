import { createStore ,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import globalReducers from './reducers/index'
const MiddleWare = [thunk]
const store = createStore(globalReducers,
    {
        todos:
        [
            { name: "izhak", age: 25 },
            { name: "marcos", age: 23 },
        ], 
        user:{}
    },
    compose(applyMiddleware(...MiddleWare))
    )
export default store