import{GET_PIZZA_REQUEST,GET_PIZZA_SUCCESS,GET_PIZZA_FAIL} from "../constants/pizza-constants"

export const getAllPizzaReducer = (state={pizzas:[]},{type,payload}) => {
    switch (type) {
        case GET_PIZZA_REQUEST: return { ...state ,isloading:true}
        case GET_PIZZA_SUCCESS : return{pizzas:payload,isloading:false}
        case GET_PIZZA_FAIL : return{Error:payload,isloading:false}
        default:
            return state
    }
}