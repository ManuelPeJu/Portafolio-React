import React from 'react'
import Hypers from "../images/Hypers.png"

const NavBar = () => {
    return (
      <nav class="navbar sticky-top navbar-expand-md navbar-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar-toggler">
            <ul class="navbar-nav d-flex justify-content-center align-items-center">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#sobre-mi">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experiencia">Experiencia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#proyectos">Proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;