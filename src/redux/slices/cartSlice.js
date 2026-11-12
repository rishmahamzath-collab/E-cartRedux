import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // add to cart - view and wishlist component
        addcart:(state,action)=>{
            const existingitem = state.find(item=>item.id==action.payload.id)
            if(existingitem){
                existingitem.quantity += 1
                existingitem.totalprice = existingitem.quantity * existingitem.price
                const remainingitem = state?.filter(item=>item.id!=existingitem.id)
                state = {...remainingitem,existingitem}


            }else{
                state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }

        },
        //remove cart item -payload - product id
        removeCartitem: (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },

        //payload - product id
        incrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity += 1
            existingProduct.totalprice =existingProduct.quantity * existingProduct.price
            state = {...remainingProduct,existingProduct}
        },

        // decrement cartitem - payload id
         decrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity -= 1
            existingProduct.totalprice =existingProduct.quantity * existingProduct.price
            state = {...remainingProduct,existingProduct}
         },
         emptyCart:(state)=>{
            return []
         }
    }
})

export const {addcart,removeCartitem,incrementCart,decrementCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer