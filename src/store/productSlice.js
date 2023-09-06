import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async function (query, {rejectWithValue}) {
        try {
            let response = null;
            if(query.category) {
                response = await fetch(`https://dummyjson.com/products/category/${query.category}?limit=20&skip=${query.page*20}`);
            } else {
                response = await fetch(`https://dummyjson.com/products?limit=20&skip=${query.page*20}`);
            }

            if (!response.ok) {
                throw new Error("Server error!")
            }
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    products: [],
    count:0,
    status: null,
    error: null,
    // name: '',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = [];
        },
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = "loading"
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.products = action.payload.products;
            state.count = action.payload.total;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {clearProducts} = productSlice.actions
export default productSlice.reducer;