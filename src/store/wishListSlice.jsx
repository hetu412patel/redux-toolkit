import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishList',
    initialState: {
        products: []
    },
    reducers: {
        toggleListItem(state, action) {
            const newId = action.payload;
            const existingProductId = state.products.find((id) => id === newId)
            if (!existingProductId) {
                state.products.push(newId)
            }
            else { state.products = state.products.filter(id => id !== existingProductId); }
        }
    }
})

export const { toggleListItem } = wishListSlice.actions
export default wishListSlice.reducer