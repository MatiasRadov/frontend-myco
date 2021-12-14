import { React } from "react";

function Firstview() {
  return (
    <>
      <header className="masthead">
        <div className="container-firstview position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">
                  Reino Fúngico
                </h1>

                <form
                  className="form-subscribe"
                  id="contactForm"
                  data-sb-form-api-token="69278b12-62a3-4928-a00b-5151d5cf4449"
                >
                  <div className="row">
                    <div className="col mb-5">
                      <input
                        className="form-control form-control-lg"
                        id="emailAddress"
                        type="text"
                        placeholder="Prueba buscando ramadarius.."
                        data-sb-validations="required,email"
                      />
                      <div
                        className="invalid-feedback text-white"
                        data-sb-feedback="emailAddress:required"
                      >
                        Email Address is required.
                      </div>
                      <div
                        className="invalid-feedback text-white"
                        data-sb-feedback="emailAddress:email"
                      >
                        Email Address Email is not valid.
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-primary btn-lg disabled"
                        id="submitButton"
                        type="submit"
                      >
                        Buscar
                      </button>
                    </div>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      <p>To activate this form, sign up at</p>
                      <a
                        className="text-white"
                        href="https://startbootstrap.com/solution/contact-forms"
                      >
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="features-icons bg-light text-center">
        <div className="container-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <div className="card">
                <h3>Colaboraciones y observaciones</h3>
                <p className="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis inventore praesentium et, nisi incidunt perferendis
                  vel adipisci fugit reprehenderit commodi error corrupti earum
                  quam quo autem ratione saepe corporis est.!
                </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary"></i>
                </div>
                <div className="card">
                <h3>Publicaciones y consultas</h3>
                <p className="lead mb-0">
                  Acá se pueden ver otras consultas de otros usuarios o
                  publicaciones de usaurios colaboradores con observaciones o
                  investigaciones que ellos hayan realizado reciente mente y
                  quieran compartir con la comunidad. !
                </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <div className="card">
                <h3>Comida fúngica</h3>
                <p className="lead mb-0">
                  Sección especial destinada a que la gente conozca mas de la
                  cocina fungica y de todos los psosibles platos que podrian
                  hacerse con ellos.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Firstview;
