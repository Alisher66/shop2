import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";
import Products from "../components/Products";

import Detail from './Detail'
import '../app.css'
import Order from "./Order";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Products />} />
                    <Route path="item/:id" element={<Detail />} />
                    <Route path="orders" element={<Order />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;