function Product({ producto }) {

    {/* 
    const id = props.match.params.id
    const imagen = fetch('http://localhost:3000/API/products/:id')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    */}

    return (
        <div className="product-card">
            <div className="product-card-description">
                <p className="card-name">{producto.nombre} </p>
                <p className="card-old-price">Precio original: {(1-producto.descuento/100)*producto.precio} </p>
                <p className="card-discount">Descuento: {producto.descuento} % </p>
                <p className="card-new-price">$ {producto.precio} </p>
            </div>
            {/* 
            <div>
                <img className='product-card-div-img' src={imagen.imagenes[0].url} alt="Trolls 2"/>
            </div>
            */}
        </div>
    )
}

export default Product;