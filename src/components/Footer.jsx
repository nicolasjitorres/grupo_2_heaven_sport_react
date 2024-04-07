import FooterInd from "./FooterInd";

function Footer() {
    return (
        <div className="footer">
            <div className="secciones">
                <FooterInd titulo="Información" link1="Medios de pago" link2="Políticas"/>
                <FooterInd titulo="check-us" link1="Acerca de HS" link2="Contacto"/>
                <FooterInd titulo="Ayuda" link1="Cambios y devoluciones" link2="Compra segura"/>
            </div>

            <section class="copyright">
                <p>Heaven Sports ©| Todos los derechos reservados.</p>
            </section>
        </div>
    )
}

export default Footer;