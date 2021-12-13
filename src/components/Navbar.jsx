import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
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
                <Link className="nav-link active" aria-current="page" to='/login'>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/collabform'>
                  Colaborador
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}


