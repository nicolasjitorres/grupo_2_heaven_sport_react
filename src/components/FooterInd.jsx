import { Link } from "react-router-dom";

function FooterInd(props) {
    return (
        <div>
            <section className="info">
                <label>
                    <h4 className="infoTitulo">{props.titulo}</h4>
                </label>
                <ul className="infoUl">
                  <li className="infoLi"><Link to="/about">{props.link1}</Link></li>
                  <li className="infoLi"><Link to="/about">{props.link2}</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default FooterInd;