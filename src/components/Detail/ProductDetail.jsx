import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import DetailCarousel from './DetailCarousel';
import ProductInfo from './ProductInfo'

function ProductDetail(props) {
    const {status, product} = props;
    return (
        <Box sx={{display: 'flex', justifyContent: "space-between"}}>
            <DetailCarousel images={product.images}/>
            <ProductInfo product={product}/>
        </Box>
    );
}

export default ProductDetail;