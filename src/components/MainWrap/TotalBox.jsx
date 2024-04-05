function TotalBox({ nombre, total }) {
    return (
        <div className="total-box">
            <p>Total de {nombre}: {total}</p>
        </div>
    )
}

export default TotalBox;