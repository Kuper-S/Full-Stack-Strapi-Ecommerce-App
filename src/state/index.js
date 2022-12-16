import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
  };
// this is the slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // this set the items to whatever we pass in the payload
    reducers: {
        setItems : (state, action) => {
            state.items = action.payload;
        },
        // Gonna update the cart
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        
        },
        // Gonna remove the item from the cart ,check if the id is not equal to the payload id
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        // Gonna increase the count of the item Simple Counter
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                }
                return item;
            });
        },
        // Gonna decrease the count of the item Simple Counter
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count -= 1;
                }
                return item;
            });
        },
        // is cart is open?
        setIsCartOpen : (state, action) => {
            state.isCartOpen = !state.isCartOpen;
        }

    }

})
// This is the action export
export const { 
    setItems ,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen
    } = cartSlice.actions;


// this is the selector
export default cartSlice.reducer;