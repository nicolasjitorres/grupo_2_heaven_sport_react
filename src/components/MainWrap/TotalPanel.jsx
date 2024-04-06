
import { useEffect, useState } from "react";
import TotalBox from "./TotalBox";

function TotalPanel() {
    const [products, setProducts] = useState({});
    const [users, setUsers] = useState({});
    const [act, setAct] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:3000/API/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [act]);

    useEffect(()=>{
        fetch('http://localhost:3000/API/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [act]);


    return (
        <div className="total-panel products">
            <div className="contTitulo">
                <h3 className="titulo">Totales</h3>
                <button className='actProd btn' onClick={() => setAct(!act)}>Actualizar</button>
            </div>
            <div className="section">
                <TotalBox nombre="productos" total={products.count} />
                <TotalBox nombre="usuarios" total={users.count} />
                <TotalBox nombre="categorias" total={products.countByCategory ? products.countByCategory.length : "Cargando..."} />
            </div>
        </div>
    )
}

export default TotalPanel;