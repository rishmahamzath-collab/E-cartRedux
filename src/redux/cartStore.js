import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishlistSlice"


const carStore = configureStore({
    reducer:{
        productReducer: productSlice,
        WishlistReducer: wishlistSlice,
        CartReducer: {}
    }
})

export default carStore