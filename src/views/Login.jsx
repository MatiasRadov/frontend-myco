import React, {useContext} from "react";
import { Context } from '../store/appContext';


function Login() {
  const {store, actions} = useContext(Context)
  return (
    <>
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
            <form className="clase-form" onSubmit={e => actions.handleSubmit(e)}>
              <div className="mb-3">
                <h6 className="text-muted">Inicia sesión</h6>
                <label for="exampleInputEmail1" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name= "email"
                  onChange={e => actions.handleChange(e)}
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
                  onChange={e => actions.handleChange(e)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <div>
                <hr />
                <h6 className="text-muted">¿Nuevo por acá?</h6>
                <a className="btn btn-primary">
                  Regístrate
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
