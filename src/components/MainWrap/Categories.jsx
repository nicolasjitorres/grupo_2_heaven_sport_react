import Category from "./Category";

function Categories() {
    return (
        <div className="categories">
            <h3>Categorias</h3>
            <Category nombre='Niños' total={10}/>
            <Category nombre='Adultos' total={3}/>
            <Category nombre='Futbol' total={19}/>
        </div>
    )
}

export default Categories;