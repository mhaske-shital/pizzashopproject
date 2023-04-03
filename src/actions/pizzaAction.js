import {GET_PIZZA_SUCCESS,GET_PIZZA_REQUEST,GET_PIZZA_FAIL} from "../constants/pizza-constants"
import pizzas from './pizza-data';


export const  getAllPizzasAction= () => async(dispatch) => {
    try {
        dispatch({ type:GET_PIZZA_REQUEST})
        console.warn(pizzas,"dfjrth");
        const res = pizzas;
        console.log(res,"all");
        dispatch({ type:GET_PIZZA_SUCCESS,payload:res})
    } catch (error) {
     dispatch({ type:GET_PIZZA_FAIL,payload:error})
    }
 } 