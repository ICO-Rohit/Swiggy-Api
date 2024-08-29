import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearItem: (state, action) => {
            const newItems = state.items.filter((item) => item.id !== action.payload);
            state.items = newItems;
        },
        clearAllItem: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, clearItem, clearAllItem } = CartSlice.actions;
export default CartSlice.reducer;