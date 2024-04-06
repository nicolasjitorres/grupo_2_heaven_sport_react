import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <div className="menu-bar">
      <nav>
        <h3>MENU</h3>
        <ul>
          <li>
            <Link to="/">
              - Home
            </Link>
          </li>
          <li>
            <Link to="/products">
              - Listado de productos
            </Link>
          </li>
          <li>
            <Link to="/products/last">
              - Ultimos productos
            </Link>
          </li>
          <li>
            <a href="/products/categories">
              - Categorias
            </a>
          </li>
          <li>
            <Link to="/statistics">
              - Estadísticas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MenuBar;