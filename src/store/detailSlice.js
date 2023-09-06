import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProductDetail = createAsyncThunk(
    'detail/getProductDetail',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`)

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
    product: {},
    status: null,
    error: null,
}


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getProductDetail.pending]: (state, action) => {
            state.status = "loading"
        },
        [getProductDetail.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.product = action.payload;
        },
        [getProductDetail.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {} = detailSlice.actions
export default detailSlice.reducer;