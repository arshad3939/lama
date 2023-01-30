import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducre from '../reducer/FilterReducer';

const FilterContext = createContext();


const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : true,
    sorting_value: "lowest",
}

export const FilterProviderContext = ({children})=>{
    
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducre, initialState);

    // For Grid View
    const setGridView = () => {
        return dispatch({type:"SET_GRID_VIEW"});
    };
    // For List View
    const setListView = () => {
        return dispatch({type:"SET_LIST_VIEW"});
    };
    // sorting 
    const sorting = (event)=>{
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userValue});
        console.log(userValue)
    }
    // to sort the product
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS"})
    },[products, state.sorting_value]);
    
    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
    },[products]);
    

    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting,}}>{children}</FilterContext.Provider>
    )
};

export const useFilterContext = ()=>{
    return useContext(FilterContext);
};

