import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearProducts, getProducts} from "../store/productSlice"
import ProductCard from "./ProductCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import FilterCategory from './FilterCategory'
import PaginationProducts from './Pagination/PaginationProducts'

function Products() {
    const {products, count, status, error} = useSelector(state => state.product);
    const currentPage = useSelector(state => state.pagination.currentPage)
    const dispatch = useDispatch();
    const currentCategory = useSelector(state => state.category.currentCategory);

    useEffect(() => {
        dispatch(clearProducts())
        dispatch(getProducts({
            category:currentCategory,
            page: currentPage
        }))
    }, [currentCategory, currentPage])

    return (
        <Container maxWidth="lg">
            <Box sx={{display: "flex", justifyContent: "space-between", mb: "50px"}}>
                <FilterCategory/>
            </Box>
            <Box component='div' className="card-wrap" sx={{}}>
                {status === 'loading' && <CircularProgress sx={{m: "0 auto"}}/>}
                {error && <Typography variant="h5" align="center" sx={{mb: "50px", mt: "20px"}}>{error}</Typography>}
                {products?.map(product => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
            </Box>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <PaginationProducts/>
            </Box>
        </Container>
    )
}

export default Products;