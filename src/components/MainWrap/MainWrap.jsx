import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import LatestAddPanel from "./LatestAddPanel";
import Products from "./Products";
import TotalPanel from "./TotalPanel";
import Home from "./Home";

function MainWrap() {

    return (
        <main className="main">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/statistics" exact element={<TotalPanel />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/products/last" exact element={<LatestAddPanel />} />
                <Route path="/products/categories" exact element={<Categories />} />
            </Routes>
        </main>
    )
}

export default MainWrap;