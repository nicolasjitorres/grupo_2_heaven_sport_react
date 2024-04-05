import LatestAddBox from "./LatestAddBox";

function LatestAddPanel() {
    return (
        <div className="latest-add-panel">
            <h3>Ultimos agregados</h3>
            <LatestAddBox nombre="nike air" />
            <LatestAddBox nombre="Adidas" />
        </div>
    )
}

export default LatestAddPanel;