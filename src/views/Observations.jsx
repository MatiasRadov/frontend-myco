import { React } from "react";
import { Link } from "react-router-dom";

function Mushcard() {
  return (
    <div className="container-observations">
      <div className="row mx-3">
        <div className="col-4 pt-5">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Ophiocordyceps sp. Micelio Latino.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Cordyceps</h5>
              <h6 className="card-subtitle text-muted">Militaris</h6>
              <p className="card-text">Hongo que se caracteriza por infectar hormigas.</p>
              <Link to="./mushroom-cordyceps">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 pt-5">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Trametes versicolor Micelio Latino.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Trametes</h5>
              <h6 className="card-subtitle text-muted">Versicolor</h6>
              <p className="card-text">Hongo utilizado en inmunoterapia contra el cáncer en China y Japón.</p>
              <Link to="./mushroom-trametes">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 pt-5">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Psilocybe cubensis - CA.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Psilocybe</h5>
              <h6 className="card-subtitle text-muted">Cubensis</h6>
              <p className="card-text">Uno de los principales hongos alucinogenos del mundo.</p>
              <Link to="./mushroom-psilocybe">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mx-3">
        <div className="col-4">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Amanita muscaria GVF.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Amanita</h5>
              <h6 className="card-subtitle text-muted">Muscaria</h6>
              <p className="card-text">Se presenta siempre cercano a plantaciones de pinos.</p>
              <Link to="./mushroom-amanita">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Battarrea stevenii GVF.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Batarrea</h5>
              <h6 className="card-subtitle text-muted">Stevenni</h6>
              <p className="card-text">Hongo poco común que se presenta en zonas áridas.</p>
              <Link to="./mushroom-batarrea">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Clathrus crispus- CA.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Clathrus</h5>
              <h6 className="card-subtitle text-muted">Crispus</h6>
              <p className="card-text">Son conocidos como "jaulas rojas". Esta envuelto en un gel viscoso de color marrón oliva que contiene esporas y atrae a las moscas.</p>
              <Link to="./mushroom-clathrus">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mx-3">
        <div className="col-4 my-3">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Geastrum fornicatum - GVF (2).jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Geastrum</h5>
              <h6 className="card-subtitle text-muted">Fornicatum</h6>
              <p className="card-text">Conocidos como estrellas de tierra. Son hongos que esperan su etapa madura para mostrar sus esporas. </p>
              <Link to="./mushroom-geastrum">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 my-3">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Amanita bisporigeria.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Amanita</h5>
              <h6 className="card-subtitle text-muted">Bisporigeria</h6>
              <p className="card-text">Este de hongo mortalmente tóxico</p>
              <Link to="./mushroom-bispori">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 my-3">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Phallus indusiatus_--CA.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Phallus</h5>
              <h6 className="card-subtitle text-muted">Indusiatus</h6>
              <p className="card-text">Este hongo se ha encontrado en todas las zonas tropicales del mundo. </p>
              <Link to="./mushroom-phallus">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mushcard;
