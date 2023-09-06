import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Pagination from '@mui/material/Pagination';
import {setPage} from '../../store/paginationSlice'

function PaginationProducts(props) {
    const count = useSelector(state => state.product.count);
    const page = useSelector(state => state.pagination.currentPage)
    const dispatch = useDispatch();

    const getPages = () => {
        return Math.ceil(count/20)
    }
    const handleChange = (e, value) => {
        dispatch(setPage(value-1))
    }
    if(count === 0) {
        return <></>
    }
    return (
        <Pagination count={getPages()} color="primary" onChange={handleChange} page={page+1} />
    );
}

export default PaginationProducts;