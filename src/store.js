import { createStore, applyMiddleware, combineReducers } from "redux"
import { cartReducer } from "./_reducers/cart-reducer"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import{getAllPizzaReducer} from './_reducers/pizza_reducer'
const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,

})

const cartFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const initialState={
    cartReducer:{
        cartItems:cartFromLocalStorage
    }
}
const middleware=[thunk]

const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;