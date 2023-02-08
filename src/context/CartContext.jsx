import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("arshadcart");
    if(localCartData === []){
        return [];
    }else{
        return JSON.parse(localCartData);
    };
};

const initialState = {
    // cart : [],
    cart: getLocalCartData(),
    totalItem:'',
    totalPrice:'',
    shippinFee : 50000,
};

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}});
    };

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload:id})
    }

    const clearCart = () =>{
        dispatch({type: "CLEAR_CART"});
    }

    const setDecrease = (id) => {
        dispatch({type:"SET_DECREASE", payload:id});
    }

    const setIncrease = (id) => {
        dispatch({type:"SET_INCREASE", payload:id});
    }

    useEffect(()=>{
<<<<<<< HEAD
        // dispatch({type:"CART_TOTAL_ITEM"});
        // dispatch({type: "CART_TOTAL_PRICE"});
        localStorage.setItem("arshadcart", JSON.stringify(state.cart));
=======
//         dispatch({type:"CART_TOTAL_ITEM"});
//         dispatch({type: "CART_TOTAL_PRICE"});
        localStorage.setItem("arshadcart",JSON.stringify(state.cart));
>>>>>>> 7bbdbc3ea6cee312072a0ead2e7e6417f2cfb1ff
    },[state.cart])


    return(
        <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}>{children}</CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext)
};

export {CartProvider, useCartContext}
