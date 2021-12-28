import { React } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Firstview() {
  return (
    <>
      <header className="masthead">
        <div className="container-firstview container-fluid">
          <div className="row mx-2 justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Reino Fúngico</h1>
              </div>
              <div className="col-6 d-flex align-items-center offset-3">
                <div className="search-bar mb-3">
                  <div className="icono">
                    <AiOutlineSearch />
                  </div>
                  <input
                    type="search"
                    className="search"
                    placeholder="Prueba buscando Ramadarius"
                  />
                </div>
              </div>
            </div>

            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="features-icons text-center">
        <div className="container-body">
          <div className="row mx-2">
            <div className="col-lg-4">
              <div className="featuresIcons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <div className="card mt-5 mb-5">
                  <h3>Observaciones</h3>
                  <p className="lead mb-0">
                    En esta sección podrás acceder a colaboraciones hechas por
                    otros usuarios, así como a observaciones de distintos tipos
                    de hongos con algunos de sus datos.
                  </p>
                  <Link to="./observations">
                  <button className="btn btn-outline-success my-2">
                  Observaciones de Hongos</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary"></i>
                </div>
                  <img
                    className="img-fluid rounded-circle mt-3"
                    width="200"
                    height="200"
                    src="../images/PNG/mycoapplogo.jpeg"
                    alt="mushroom"
                  />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <div className="card d-grid mt-5 mb-5">
                  <h3>Comida fúngica</h3>
                  <p className="lead mb-0">
                    Sección especial destinada a que la gente conozca mas de la
                    cocina fungica y de todos los psosibles platos que podrian
                    hacerse con ellos.
                  </p>
                  <Link to="./fungicfood">
                  <button className="btn btn-outline-success my-2">
                  Ver Hongos Comestibles</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row mt-5">
        <div className="col-12 mt-5">
          <div className="firstFooter position-relative bg-light">
            <div className="box position-absolute w-25 h-25 top-0 start-0">
              <img className="img" src="./images/png/Fungis-08.png" alt="" />
            </div>
            <div className="box position-absolute w-25 h-25 top-0 end-0">
              <img className="img" src="./images/png/Fungis-09.png" alt="" />
            </div>
            <div className="box position-absolute w-25 h-25 top-50 start-50">
              <img className="img" src="./images/png/Fungis-10.png" alt="" />
            </div>
            <div className="box position-absolute w-25 h-25 bottom-50 end-50">
              <img className="img" src="./images/png/Fungis-11.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstview;
