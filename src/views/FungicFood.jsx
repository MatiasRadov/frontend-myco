import { React } from "react";
import { Link } from "react-router-dom";

function FungicFood() {
  return (
    <div className="container-observations">
      <div className="row mx-3">
        <div className="col-4 pt-5">
          <div className="card w-75">
            <img
              className="card-img-top"
              src=""
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Auricularia</h5>
              <h6 className="card-subtitle text-muted">Sp</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 my-3">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Ramaria sp GVF.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Ramaria</h5>
              <h6 className="card-subtitle text-muted">Sp</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
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
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-outline-success">
                Ver
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 my-3">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/pleoratus.jpeg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Pleurotus</h5>
              <h6 className="card-subtitle text-muted">Ostreatus</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <Link to='./mushroom-pleoratus'>
              <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FungicFood;
