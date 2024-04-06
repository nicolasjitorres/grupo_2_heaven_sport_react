function LatestAddBox({ producto }) {
    return (
        <div className="latest-add-box">
            <p>Nombre: {producto.nombre}</p>
            <p>descuento: {producto.descuento}</p>
        </div>
    )
}

export default LatestAddBox;