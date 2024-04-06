import { useEffect, useState } from "react";
import LatestAddBox from "./LatestAddBox";

function LatestAddPanel() {

    const [products, setProducts] = useState([]);
    const [act, setAct] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:3000/API/products')
        .then(res => res.json())
        .then(data => setProducts(data.products.slice(-2)));
    }, [act]);

    return (
        <div className="latest-add-panel products">
            <div className="contTitulo">
                <h3 className="titulo">Ultimos agregados</h3>
                <button className='actProd btn' onClick={() => setAct(!act)}>Actualizar</button>
            </div>
            <div className="section">
                {
                    products.map((prod) => {
                        return <LatestAddBox producto={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default LatestAddPanel;