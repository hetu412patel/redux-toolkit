import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addWishItem(state,action){
            state.push(action.payload)
        },

        removeWishItem(state,action){
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {addWishItem, removeWishItem} = wishListSlice.actions
export default wishListSlice.reducer