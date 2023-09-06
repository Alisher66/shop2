import React from 'react';
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

function DetailCarousel(props) {
    const images = props.images
    return (
        <Box sx={{minWidth: "45%", mr: "40px"}} className="detail__left-wrap">
            <Carousel showArrows={false} showIndicators={false} showStatus={false}>
                {images?.map(image => {
                    return (
                        <div key={image}>
                            <img src={image}/>
                        </div>
                    )
                })}
            </Carousel>
        </Box>
    );
}

export default DetailCarousel;