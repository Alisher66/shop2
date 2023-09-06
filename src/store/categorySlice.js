import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch("https://dummyjson.com/products/categories")

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
    categories: [],
    currentCategory: "",
    status: null,
    error: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.currentCategory = action.payload
        },
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.status = "loading"
        },
        [getCategories.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.categories = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {setCategory} = categorySlice.actions
export default categorySlice.reducer;