function LatestAddBox({ producto }) {
    return (
        <div className="latest-add-box product-card">
            <div className="product-card-descripction">
                <p className="card-name">Nombre: {producto.nombre}</p>
                <p className="card-discount">Descuento: {producto.descuento} %</p>
            </div>
        </div>
    )
}

export default LatestAddBox;