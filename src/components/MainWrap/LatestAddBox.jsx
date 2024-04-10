import { Link } from "react-router-dom";


function LatestAddBox({ producto }) {

    return (
        <div className="latest-add-box product-card">
            <div className="product-card-descripction">
                <p className="card-title">Nombre: {producto.nombre}</p>
                <p className="card-item"><span className="caracterist">Descripción:</span> {producto.descripcion}</p>
                <p className="card-item"><span className="caracterist">Precio: </span> {producto.precio}</p>
                <p className="card-item"><span className="caracterist">Descuento: </span> {producto.descuento} %</p>
                <div className="card-item"><span className="caracterist">Talles: </span>  
                {
                    producto.talles.map((talle) => {
                        return `${talle.numero}-` 
                    })
                }
                </div>
                <Link to={producto.detail}><p className="card-item caracterist">Detalle <i class="fa-solid fa-angles-right"></i></p></Link>
            </div>
        </div>
    )
}

export default LatestAddBox;