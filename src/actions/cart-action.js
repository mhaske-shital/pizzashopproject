export const addToCart=(pizza,quantity,varient,id)=>(dispatch,getState)=>{
    console.log("id",id);
    var cartItems={
        name:pizza.name,
        id:pizza.id,
        image:pizza.image,
        varient:varient,
        quantity:Number(quantity),
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity
    };
    if(cartItems.quantity ==0){
        // dispatch({type:"DELETE_FROM_CART",payload:pizza})
    }else{
    dispatch({type:"ADD_TO_CART",payload:cartItems});
   
    localStorage.setItem("cartItem", JSON.stringify(getState().cartReducer.cartItems));
   
    }}

export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
dispatch({type:"DELETE_FROM_CART",payload:pizza})
const cartItems= getState().cartReducer.cartItems;
localStorage.setItem("cartItems",JSON.stringify(cartItems))
}