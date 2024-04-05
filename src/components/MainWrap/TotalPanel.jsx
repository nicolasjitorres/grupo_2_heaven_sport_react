import UseDataFetch from "./CustomHooks";
import TotalBox from "./TotalBox";

function TotalPanel() {
    const products = UseDataFetch('http://localhost:3000/API/products');
    const users = UseDataFetch('http://localhost:3000/API/users');

    return (
        <div className="total-panel">
            <h3>Totales</h3>
            <TotalBox nombre="productos" total={products.count} />
            <TotalBox nombre="usuarios" total={users.count} />
            <TotalBox nombre="categorias" total={Object.keys(products.countByCategory).length} />
        </div>
    )
}

export default TotalPanel;