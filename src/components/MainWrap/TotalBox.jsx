function TotalBox({ nombre, total }) {
    return (
        <div className="total-box product-card center">
            <div className="product-card-descripction">
                <p className="card-name">Total de <span className="card-new-price">{nombre}</span>: </p>
                <p className="card-discount center bold">{total}</p>
            </div>
        </div>
    )
}

export default TotalBox;