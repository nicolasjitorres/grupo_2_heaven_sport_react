import logo from '../../images/logos/Logo.png'

function Home () {
    return(
        <div className="home">
            <h2>
                <img className="imagenHome" src={logo} alt="Logo"/>
            </h2>
        </div>
    )
}

export default Home;