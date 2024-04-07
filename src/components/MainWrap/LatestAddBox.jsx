import { Link } from "react-router-dom";


function LatestAddBox({ producto }) {

    return (
        <div className="latest-add-box product-card">
            <div className="product-card-descripction">
                <p className="card-title">Nombre: {producto.nombre}</p>
                <p className="card-item">Descripción: {producto.descripcion}</p>
                <p className="card-item">Precio: {producto.precio}</p>
                <p className="card-item">Descuento: {producto.descuento} %</p>
                <div className="card-item"> Talles: 
                {
                    producto.talles.map((talle) => {
                        return `${talle.numero}-` 
                    })
                }
                </div>
                <Link to={producto.detail}><p className="card-item">Detalle</p></Link>
            </div>
        </div>
    )
}

export default LatestAddBox;