import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Box, Button,} from "@mui/material";
import {getProductDetail} from "../store/detailSlice";
import ProductDetail from '../components/Detail/ProductDetail'


function Details(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {product, status, error} = useSelector(state => state.detail)

    useEffect(() => {
        let id = params.id
        dispatch(getProductDetail(id))
    }, [params])

    if (error) {
        return (
            <Container maxWidth="lg">
                <h2>Error</h2>
            </Container>
        )
    }
    return (
        <Container maxWidth="lg">
            <Box>
                <Button
                    variant="outlined"
                    sx={{mb: "50px"}}
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    Home
                </Button>
                <ProductDetail status={status} product={product}/>
            </Box>
        </Container>
    )
}

export default Details;