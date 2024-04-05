import Product from "./Product";

function Products() {
    return (
        <div className="products">
            <h3>Productos</h3>
            <Product nombre="Nike Air" />
            <Product nombre="Nike Air Max" />
            <Product nombre="Adidas Full" />
            <Product nombre="Fila Fly" />
        </div>
    )
}

export default Products;