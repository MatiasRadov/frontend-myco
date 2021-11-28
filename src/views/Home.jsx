import React from "react";

function Home() {
  return (
    <>
      <div class="container-fluid bg-dark text-light p-5">
        <a href="#" class="btn btn-primary">
          Iniciar Sesión
        </a>
        <div class="container bg-dark p-5">
          <h1 class="display-4">Jumbotron de la myco app</h1>
          <hr />
          <p>Myco App grupo Bastián Moral y Matías Quezada</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  En esta sección explicaremos que es un hongo cuales son su
                  partes y que es todo este reino fungi para los neófitos del
                  tema que no sepan nada sobre el asunto.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  En esta sección dirigimos a la app donde el usuario podrá
                  encontrar una gran variedad de hongos entre ellos muchos
                  hongos comestibles o tóxicos con muchas características
                  bastante particulares.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card row text-center">
              <div class="card-header col-12">Logo 4Geeks</div>
              <div class="card-body col-12">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  FOOTER CON TODOS NUESTROS DATOS Y APARTADO DE CONTACTOS
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div class="card-footer col-12 text-muted">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
