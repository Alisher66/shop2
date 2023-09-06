import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ProductInfo(props) {
    const product = props.product
    return (
        <Box sx={{minWidth:"45%"}} className="detail__right-wrap">
            <Typography variant="h6" component="p">Brand: {product.brand}</Typography>
            <Typography variant="h6" component="p">Title: {product.title}</Typography>
            <Typography variant="h6" component="p">Category: {product.category}</Typography>
            <Typography variant="p" component="p">Description: {product.description}</Typography>
            <Typography variant="p" component="p">Price: {product.price}</Typography>
            <Typography variant="p" component="p">Rating: {product.rating}</Typography>
            <Typography variant="p" component="p">Stock: {product.stock}</Typography>
            <Typography variant="p" component="p">DiscountPercentage: {product.discountPercentage}</Typography>
        </Box>
    );
}

export default ProductInfo;