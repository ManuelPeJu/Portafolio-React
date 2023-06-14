import React from 'react' 
import Countries from "../images/proyecto-countries.jpg"
import portafolios from "../images/portafolios.jpg"
import sushi from "../images/sushi-2.png"

const Proyectos = () => {
    return (
      <>
        <section id="proyectos" class="proyectos-recientes seccion-oscura d-flex flex-column">
          <h2 class="section-title texto-blanco">Mis proyectos recientes</h2>
          <h3 class="seccion-descripcion">
            Estos son algunos de los proyectos en los que he estado trabajando.
          </h3>

          {/* <!--Galería de proyectos--> */}

          {/* <!--Proyecto 1--> */}

          <div class="container text-center proyectos-contenedor">
            <div class="row">
              {/* <!--Proyecto 1-->  */}
              <div class="col-12 col-md-6 col-lg-4">
                <div class="proyecto">
                  <img src={Countries} width="50px" height="30px" />
                  <div class="overlay">
                    <p>Countries</p>
                    <div class="iconos-contenedor">
                      <a href="https://github.com/ManuelPeJu/PI-Henry-Countries" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                      </a>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        {/* <i class="bi bi-arrow-up-right"></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Proyecto 2--> */}
              <div class="col-12 col-md-6 col-lg-4">
                <div class="proyecto">
                  <img src={portafolios} width="50px" height="30px" />
                  <div class="overlay">
                    <p>Portafolios</p>
                    <div class="iconos-contenedor">
                      <a href="https://github.com/ManuelPeJu/Portafolio" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                      </a>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        {/* <i class="bi bi-arrow-up-right"></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Proyecto 3--> */}
              <div class="col-12 col-md-6 col-lg-4">
                <div class="proyecto">
                  <img src={sushi} />
                  <div class="overlay">
                    <p>Sushi</p>
                    <div class="iconos-contenedor">
                      <a href="https://github.com/ManuelPeJu/Sushi" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                      </a>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        {/* <i class="bi bi-arrow-up-right"></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/ManuelPeJu" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-info">
              Más proyectos
              <i class="bi bi-arrow-right-circle-fill" />
            </button>
          </a>
        </section>
      </>
    );
}


export default Proyectos;