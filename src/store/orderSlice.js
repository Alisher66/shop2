import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: []
}
const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload)
        },
        changeOrder: (state, action) => {
            state.orders.forEach(order => {
                if(order.product_id === action.payload.product_id) {
                    order.count = action.payload.count
                    order.total_price = action.payload.total_price
                }
            })
        },
        deleteOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.product_id !== action.payload)
        }
    }
})

export const {addOrder, changeOrder, deleteOrder} = orderSlice.actions;
export default orderSlice.reducer;