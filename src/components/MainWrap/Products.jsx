import { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
    const [products, setProducts] = useState([]);
    const [act, setAct] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/API/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [act]);
    
    return (
        <div className="products">
            <div className="contTitulo">
                <h3 className="titulo">Listado de productos</h3>
                <button className='actProd btn' onClick={() => setAct(!act)}>Actualizar</button>
            </div>
            <div className="section">
                {
                    products.map(prod => {
                        return <Product producto={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Products;