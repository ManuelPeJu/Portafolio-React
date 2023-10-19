import React from 'react'

const Experiencia = () => {
    return (
        <>
    <section id="experiencia" class="experiencia seccion-clara">
      <div class="container text-center">
        <div class="row">
          {/* <!-- desarrollo web --> */}
          <div class="columna col-12 col-md-6">
            <i class="bi bi-pc-display"></i>
            <p class="experiencia-title">Desarrollador web</p>
            <p>Para ser desarrollador FullStack, decidí centrar mis estudios en el lenguaje de JavaScript y sus diferentes tecnologías. </p>
            <div class="badges-contenedor">
              <span class="badge text-bg-primary">HTML</span>
              <span class="badge text-bg-primary">CSS</span>
              <span class="badge text-bg-primary">Bootstrap</span>
              <span class="badge text-bg-primary">SASS</span>
              <span class="badge text-bg-primary">Tailwind</span>
              <span class="badge text-bg-primary">JavaScript</span>
              <span class="badge text-bg-primary">React</span>
              <span class="badge text-bg-primary">Redux</span>
              <span class="badge text-bg-primary">NodeJs</span>
              <span class="badge text-bg-primary">Express</span>
              <span class="badge text-bg-primary">MySQL</span>
              <span class="badge text-bg-primary">Sequelize</span>
              <span class="badge text-bg-primary">PostgreSQL</span>
            </div>
          </div >
            {/* <!-- Estudios --> */}
            <div class="columna col-12 col-md-6">
                <i class="bi bi-book"></i>
                <p class="experiencia-title">Estudios</p>
                <p>Durante medio año estuve aprendiendo a programar de forma autodidacta. Después del reto que esto supuso, decidí inscribirme en el bootcamp de SoyHenry para avanzar más profundamente en el lenguaje de JavaScript y Tecnologías como React, Redux, NodeJs y Express para el desarrollo web.</p>
                <div class="badges-contenedor">
                <span class="badge text-bg-primary">Autodidacta</span>
                <span class="badge text-bg-primary">Henry</span>
                <span class="badge text-bg-primary">FreeCodeCamp</span>
                <span class="badge text-bg-primary">Udemy</span>
            </div>
            </div>
        </div>
        </div>
    </section>
        </>
    )
}

export default Experiencia;