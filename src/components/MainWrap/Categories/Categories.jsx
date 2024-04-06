import { useEffect, useState } from "react";
import Category from "./Category";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [act, setAct] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/API/products')
            .then(res => res.json())
            .then(data => setCategories(data.countByCategory));
    }, [act]);

    return (
        <div className="categories products">
            <div className="contTitulo">
                <h3 className="titulo">Categorias</h3>
                <button className='actProd btn' onClick={() => setAct(!act)}>Actualizar</button>
            </div>
            <div className="section">
                {
                    categories.map((cat, index) => {
                        return <Category nombre={cat.nombre} total={cat.totalProductos} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Categories;