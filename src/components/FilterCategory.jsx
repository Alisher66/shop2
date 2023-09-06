import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getCategories, setCategory} from '../store/categorySlice'
import {setPage} from '../store/paginationSlice'
import {useDispatch, useSelector} from "react-redux";

function FilterCategory(props) {
    const dispatch = useDispatch();
    const {categories, currentCategory} = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const handleChange = (event) => {
        if(event.target.value === "All") {
            dispatch(setCategory(""));
        }
        else dispatch(setCategory(event.target.value));
        dispatch(setPage(0))
    };

    return (
        <Box sx={{minWidth: 200}}>
            <FormControl fullWidth>
                <InputLabel id="categories">Categories</InputLabel>
                <Select
                    labelId="categories"
                    id="categories"
                    value={currentCategory === "" ? "All" : currentCategory}
                    label="categories"
                    onChange={handleChange}
                >
                    <MenuItem value="All">All</MenuItem>
                    {categories && categories.map(category => {
                        return (<MenuItem key={category} value={category}>{category}</MenuItem>)
                    })}

                </Select>
            </FormControl>
        </Box>
    );
}

export default FilterCategory;