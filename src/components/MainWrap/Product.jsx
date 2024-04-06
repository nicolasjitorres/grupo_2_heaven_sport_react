function Product({ producto }) {
    return (
        <div className="product">
            <p>Nombre: {producto.nombre} </p>
            <p>Precio: {producto.precio} </p>
            <p>Descuento: {producto.descuento} </p>
        </div>
    )
}

export default Product;