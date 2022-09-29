import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Pakages from "../pages/Pakages"
import Singapore from "../pages/Singapore"

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pakages" element={<Pakages/>} />
        <Route path="/singapore" element={<Singapore/>} />
    </Routes>
}