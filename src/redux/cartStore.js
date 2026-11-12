import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishlistSlice"
import cartSlice from "./slices/cartSlice";


const carStore = configureStore({
    reducer:{
        productReducer: productSlice,
        WishlistReducer: wishlistSlice,
        CartReducer: cartSlice
    }
})

export default carStore