import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

function Login() {
  const context  = useContext(Context);
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.login_user(state)
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container-login">
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
            <form className="clase-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <h6 className="text-muted">Inicia sesión</h6>
                <label htmlFor="exampleInputEmail1" className="form-label">
                <AiTwotoneMail /> Correo electrónico
                </label>
                
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"  
                /> 
                <div id="emailHelp" className="form-text text-muted">
                  Nunca compartiremos tu dirección de correo con nadie más.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                <AiFillLock /> Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                  <button className="btn btn-success">Iniciar Sesión</button>
              </div>
              <div>
                <hr />
                <h6 className="text-muted">¿Nuevo por acá?</h6>
                <Link 
                to= '/register'>
                  <div className="btn btn-success">Regístrate</div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
