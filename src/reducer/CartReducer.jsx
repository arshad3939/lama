

const CartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // takel the existing products
    let existingProduct = state.cart?.find((curItem) => {
      return curItem.id === id + color
    })
    if (existingProduct) {
      const updateProduct = state.cart?.map((curItem) => {
        if (curItem.id === id + color) {
          let newAmount = curItem.amount + amount;

          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }
          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem;
        };
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      const productCart = {
        id: id + color,
        name: product.name,
        color,
        amount,
        price: product.price,
        image: product.image[0].url,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, productCart],
      }
    }
  };

  if (action.type === "REMOVE_ITEM") {

    let updateCart = state.cart?.filter((curItem) => curItem.id !== action.payload);

    return {
      ...state,
      cart: updateCart,
    };
  };

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    }
  };

  if (action.type === "SET_DECREASE") {
    const updateProduct = state.cart?.map((curItem) => {
      if (curItem.id === action.payload) {
        let decAmount = curItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curItem,
          amount: decAmount,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: updateProduct
    }
  };

  if (action.type === "SET_INCREASE") {
    const updateProduct = state.cart?.map((curItem) => {
      if (curItem.id === action.payload) {
        let incAmount = curItem.amount + 1;

        if (incAmount >= curItem.max) {
          incAmount = curItem.max
        }
        return {
          ...curItem,
          amount: incAmount
        }
      } else {
        return curItem
      }
    })
    return {
      ...state,
      cart: updateProduct
    }
  };

  if (action.type === "CART_TOTAL_ITEM") {
    let updateCartIcon = state.cart?.reduce((initialValue, curItem) => {
      let { amount } = curItem;

      initialValue = initialValue + amount;
      return initialValue;
    }, 0);

    return {
      ...state,
      totalItem: updateCartIcon,
    };
  };

  if (action.type === "CART_TOTAL_PRICE") {
    let totalPrice = state.cart?.reduce((initialVal, curItem) => {
      let { price, amount } = curItem;

      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalPrice,
    }
  }

  return state;
}

export default CartReducer