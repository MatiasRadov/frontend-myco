import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

function Login() {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    actions.sendForm(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            Myco App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2">
            <img
              className="img-fluid img-thumbnail rounded-circle"
              width="150"
              height="150"
              src="../images/cordyceps-millitaris.jpg"
              alt="mushroom"
            />

            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 align-self-center">
            <form className="clase-form" onSubmit={(e) => handleSubmitLogin(e)}>
              <div className="mb-3">
                <h6 className="text-muted">Inicia sesión</h6>
                <label for="exampleInputEmail1" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => actions.handleChange(e)}
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
                  name="password"
                  onChange={(e) => actions.handleChange(e)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <button type="submit" value='Enviar' className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <div>
                <hr />
                <h6 className="text-muted">¿Nuevo por acá?</h6>
                <a className="btn btn-primary">Regístrate</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
