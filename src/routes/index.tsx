import DefaultLayout from "@src/layout/DefaultLayout";
import Checkout from "@src/pages/Checkout";
import Home from "@src/pages/Home";
import Sucess from "@src/pages/Success";
import { Route, Routes } from "react-router-dom";


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/sucess" element={<Sucess/> }/>
            </Route>
        </Routes>
    )
}