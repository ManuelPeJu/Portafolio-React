import React from 'react'
import Hypers from "../images/Hypers.png"


const Footer = () => {
    return (    
            <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
                {/* <img class="footer-logo" src={Hypers} width="100" alt="Logo del Portafolio" /> */}
                <p class="footer-texto text-center">Aprendo y creo todos los días.<br />Creemos un proyecto juntos.</p>
                <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
                    <a href="https://github.com/ManuelPeJu" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/manuel-pérez-jurado/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="mailto:perezjuradomanuel@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-envelope"></i>
                    </a>
                </div>
                <div class="derechos-de-autor">
                    Creado por Manuel Pérez Jurado &#169;
                </div>
            </footer>
    )
}

export default Footer;