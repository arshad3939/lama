const ProductReducer = (state, action)=>{
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            const featured = action.payload.filter((curElem)=>{
                return curElem.featured === true;
            });

            return{
                ...state,
                isLoading: false,
                products:action.payload,
                featured:featured,
            };

        case "API_ERROR":
            return{
                ...state,
                isLoading: false,
                isError: true,
            };
    
        default:
            return state;
    }
};

export default ProductReducer;