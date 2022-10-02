import {Routes,Route} from "react-router-dom"
import Explore from "../pages/Explore"
import Home from "../pages/Home"
import Pagenotfound from "../pages/Pagenotfound"
import Pakages from "../pages/Pakages"
import Products from "../pages/Products"
import Searchpage from "../pages/Searchpage"
import Singapore from "../pages/Singapore"
import Uploadpage from "../pages/Uploadpage"

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Pagenotfound/>} />
        <Route path="/pakages" element={<Pakages/>} />
        <Route path="/pakages/:id" element={<Products/>} />
        <Route path="/search" element={<Searchpage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/singapore" element={<Singapore/>} />
        <Route path="/upload" element={<Uploadpage/>} />
    </Routes>
}