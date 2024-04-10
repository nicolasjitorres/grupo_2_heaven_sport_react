function Category({ nombre, total }) {
    return (
        <div className="total-panel product-card">
            <div className="product-card-descripction">
                <p className="card-name">{nombre}</p>
                <p className="card-discount">Total de productos: <span className="card-new-price">{total}</span></p>
            </div>
        </div>
    )
}

export default Category;