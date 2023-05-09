import React from 'react'
import Foto from "../images/Foto.jpeg"
import PC from "../images/hero.png"
// import "./CSS/styles.scss"


const Hero = () => {
    return (
        <>
            <section class="hero align-items-stretch">
                <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
                    <img class="hero-img-perfil rounded-circle" src={Foto} width="250px" alt="Imagen personal" />
                    <h1>¡Buenas! Soy Manuel Pérez Jurado</h1>
                    <h2>Desarrollador web FullStack</h2>
                </div>
                    <div class="hero-inferior">
                    <img class="hero-inferior-img img-fluid" src={PC} width="650px" alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React." />
                </div>
            </section>
        </>
    )
}

export default Hero;