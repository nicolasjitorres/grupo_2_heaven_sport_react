import Categories from "./Categories";
import LatestAddPanel from "./LatestAddPanel";
import Products from "./Products";
import TotalPanel from "./TotalPanel";

function MainWrap() {

    return (
        <main className="main">
            <TotalPanel/>

            <LatestAddPanel />

            <Categories />

            <Products />
        </main>
    )
}

export default MainWrap;