import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import { authReducer } from "./Auth/reducer"
import {customerProductReducer} from "./Product/reducer"
import { cartReducer } from "./Cart/reducer"
import { orderReducer } from "./Order/reduce"

const reactReducer = combineReducers({
    authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store = legacy_createStore(reactReducer,applyMiddleware(thunk))