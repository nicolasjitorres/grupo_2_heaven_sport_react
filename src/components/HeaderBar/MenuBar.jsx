import { Link } from 'react-router-dom'

import logoZapa from '../../images/logos/Logo-zapa.png'

function MenuBar() {
  return (
    <div className="menu-bar">
      <nav className='menu-bar-in'>
        <div class="contenedor-logo">
          <h3 className='nombre-pagina'>Heaven</h3>
          <img src={logoZapa} alt="Logo provisirio" class="logo"/>
          <h3 class="nombre-pagina">Sports</h3>
        </div>
        <div>
          <ul className='lista-menu'>
            <li>
              <Link className='elem-lista-menu btn' to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className='elem-lista-menu btn' to="/products">
                Listado de productos
              </Link>
            </li>

            <li>
              <Link className='elem-lista-menu btn' to="/products/last">
                Ultimos productos
              </Link>
            </li>

            <li>
              <Link className='elem-lista-menu btn' to="/products/categories">
                Categorias
              </Link>
            </li>

            <li>
              <Link className='elem-lista-menu btn' to="/totals">
                Totales
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MenuBar;