import {useSelector, useDispatch} from 'react-redux'
import {addOrder, changeOrder, deleteOrder} from '../../store/orderSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import IconButton from "@mui/material/IconButton";


function Orders() {
    const orders = useSelector(state => state.order.orders);
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    const orderChangeCount = (order, count, price) => {
        if (count > 0) {
            const changedOrder = {
                ...order,
                count,
                total_price: price * count
            }
            dispatch(changeOrder(changedOrder))
        }
    }
    const handleDelete = (order) => {
        dispatch(deleteOrder(order.product_id));
    }
    return (
        <Container maxWidth="lg">
            <TableContainer sx={{mt: "50px", mb: "50px"}} component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Count</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Total price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell><img width={170} src={order.productDetail.thumbnail}
                                                    alt={order.productDetail.title}/></TableCell>
                                    <TableCell>{order.productDetail.title}</TableCell>
                                    <TableCell> <TextField
                                        id="outlined-number"
                                        label="Count"
                                        type="number"
                                        value={order.count}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e) => {
                                            orderChangeCount(order, e.target.value, order.productDetail.price)
                                        }}
                                    /></TableCell>
                                    <TableCell>{order.productDetail.price} $</TableCell>
                                    <TableCell>{order.total_price}$</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => {
                                            handleDelete(order)
                                        }}>
                                            <DeleteForeverTwoToneIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders;