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
              src="../images/Auricularia-auricular-judae.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Auricularia</h5>
              <h6 className="card-subtitle text-muted">Sp</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <Link to="./mushroom-auricularia">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 pt-5">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Ramaria sp GVF.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Ramaria</h5>
              <h6 className="card-subtitle text-muted">Stevenni</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <Link to="./mushroom-ramaria">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 pt-5">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Shiitake.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Lentinula</h5>
              <h6 className="card-subtitle text-muted">Cubensis</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <Link to="./mushroom-lentinula">
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
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Cultivo_agaricus.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Paris</h5>
              <h6 className="card-subtitle text-muted">Muscaria</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <Link to="./mushroom-agaricus">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card w-75">
            <img
              className="card-img-top"
              src="../images/Hericium erinaceus.jpg"
              alt="mush"
              width="100"
            />
            <div className="card-body">
              <h5 className="card-title">Hericium</h5>
              <h6 className="card-subtitle text-muted">Versicolor</h6>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <Link to="./mushroom-hericium">
                <button className="btn btn-outline-success">Ver</button>
              </Link>
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
              <Link to="./mushroom-pleoratus">
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
