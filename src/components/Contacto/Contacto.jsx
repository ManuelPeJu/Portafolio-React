import React from 'react'

const Contacto = () => {
    return (
        <>
            <section id="contacto" class="contacto seccion-blanca">
            <div class="container">
                <div class="container text-center rectangulo d-flex justify-content-evenly">
                    <div class="row">
                        <div class="col-12 col-md-4 section-title">
                            ¡Hablemos!
                        </div>
                        <div class="col-12 col-md-4 descripcion">
                            Contáctamente para iniciar tú proyecto de desarrollo web y haré que tu visión se vuelva realidad.
                        </div>
                        <div class="col-12 col-md-4">
                            <a href="mailto:perezjuradomanuel@gmail.com">
                                <button type="button">
                                Contacto 
                                <i class="bi bi-envelope-check-fill"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}


export default Contacto;