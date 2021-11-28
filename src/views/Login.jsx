import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2">
            <img
              className="img-fluid img-thumbnail rounded-circle"
              width="150"
              height="150"
              src="public\images\cordyceps-millitaris.jpg"
              alt="mushroom"
            />

            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 align-self-center">
            <form className="clase-form">
              <div className="mb-3">
                <h6 className="text-muted">Inicia sesión</h6>
                <label for="exampleInputEmail1" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-muted">
                  Nunca compartiremos tu dirección de correo con nadie más.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Recuérdame
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Colaborador
                </label>
              </div>
              <div>
                <hr />
                <h6 className="text-muted">¿Nuevo por acá?</h6>
                <button type="submit" className="btn btn-primary">
                  Regístrate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

//ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontSize=15;align=center;

export default Login;
