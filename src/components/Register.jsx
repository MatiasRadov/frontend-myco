import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Register = () => {
  const { actions } = useContext(Context);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.sendFormRegister(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-6 offset-3">
      <h1 className="fst-italic">Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            id="exampleInputLastName1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            name="Last_name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

/* function Form() {
  return (
    <div>
      <div className="container px-5 my-5">
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="nombre"
              type="text"
              placeholder="Nombre"
              data-sb-validations="required"
            />
            <label for="nombre">Nombre</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="nombre:required"
            >
              Nombre is required.
            </div>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="apellido"
              type="text"
              placeholder="Apellido"
              style="height: 10rem;"
              data-sb-validations="required"
            ></textarea>
            <label for="apellido">Apellido</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="apellido:required"
            >
              Apellido is required.
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              type="text"
              placeholder="Email"
              data-sb-validations="required"
            />
            <label for="email">Email</label>
            <div className="invalid-feedback" data-sb-feedback="email:required">
              Email is required.
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="password"
              type="text"
              placeholder="Password"
              data-sb-validations="required"
            />
            <label for="password">Password</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="password:required"
            >
              Password is required.
            </div>
          </div>
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              <p>To activate this form, sign up at</p>
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg disabled"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>)
    </div>
  );
}

export default Form;
 */
