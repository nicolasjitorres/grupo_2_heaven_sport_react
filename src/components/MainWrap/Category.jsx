function Category({ nombre, total }) {
    return (
        <div className="total-panel">
            <p>{nombre}: total de productos {total}</p>
        </div>
    )
}

export default Category;