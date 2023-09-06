import {Outlet, NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




function Layout() {
    return (
        <>
            <Box sx={{flexGrow: 1, mb:"100px"}}>
                <AppBar position="static">
                    <Toolbar sx={{display: "flex", justifyContent:"space-between"}}>
                        <ul className="header_menu" style={{display: "flex", listStyle:'none'}}>
                            <li>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    <NavLink to="/" >Products</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    <NavLink to="/orders">Orders</NavLink>
                                </Typography>
                            </li>
                        </ul>
                    </Toolbar>
                </AppBar>
            </Box>
            <header style={{marginBottom:"100px"}}>

            </header>
            <Outlet/>
            <footer>

            </footer>
        </>
    )
}

export default Layout;