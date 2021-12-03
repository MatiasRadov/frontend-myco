import React from "react";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid bg-dark text-light">
          <a href="#" className="btn btn-primary float-end mt-3">
            Iniciar Sesión
          </a>
          <div className="container bg-dark p-3">
            <h1 className="display-4">Jumbotron de la myco app</h1>
            <hr />
            <p>Myco App grupo Bastián Moral y Matías Quezada</p>
          </div>
        </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col">
                <div className="carousel slide carousel-fade" id="mi-carousel" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="img-fluid" src="../images/cordyceps-millitaris.jpg" alt="" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                      <div className="carousel-caption">
                        <h5>Reino fúngico</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <img className="img-fluid" src="../images/hongo2.jpg" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img className="img-fluid" src="../images/hongo3.jpg" alt="" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#mi-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#mi-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                  <div className="carousel-indicators">
                    <button type="button" className="active" data-bs-target="#mi-carousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
                    <button type="button" className="" data-bs-target="#mi-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className="" data-bs-target="#mi-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="row justify-content-between">
          <div className="col-4 mt-5 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">¿Qué es un hongo?</h5>
                <p className="card-text">
                  En esta sección explicaremos que es un hongo cuales son su
                  partes y que es todo este reino fungi para los neófitos del
                  tema que no sepan nada sobre el asunto.
                </p>
                <a href="#" className="btn btn-primary">
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 mt-5 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Myco App</h5>
                <p className="card-text">
                  En esta sección dirigimos a la app donde el usuario podrá
                  encontrar una gran variedad de hongos entre ellos muchos
                  hongos comestibles o tóxicos con muchas características
                  bastante particulares.
                </p>
                <a href="#" className="btn btn-primary">
                  Ir a la App
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <footer className="text-center text-lg-start bg-light text-muted">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>
                <div>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Myco App
                      </h6>
                      <p>
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Angular
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          React
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Vue
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Laravel
                        </a>
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Help
                        </a>
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p>
                        <i className="fas fa-home me-3"></i> New York, NY 10012, US
                      </p>
                      <p>
                        <i className="fas fa-envelope me-3"></i>
                        info@example.com
                      </p>
                      <p>
                        <i className="fas fa-phone me-3"></i> + 01 234 567 88
                      </p>
                      <p>
                        <i className="fas fa-print me-3"></i> + 01 234 567 89
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="text-center p-4"
              >
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
