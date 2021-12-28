import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomCordyceps() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Cordyceps+militaris+2.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Cordyceps militaris</h1>
            <h1 className="font-weight-light"> Hongo Zombi</h1>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Es comestible?</h2>
                <p className="card-text">
                  Este hongo no es comestible. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Es alucinógeno?</h2>
                <p className="card-text">
                 Este hongo no es alucinogeno
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Dónde lo puedo encontrar?</h2>
                <p className="card-text">
                  Este hongo se encuentra principalmente en las zonas tropicales. 
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                    <h1>Cordyceps militaris. El hongo Zombi</h1>
                    <p>
                      Este hongo prolifera sobre hojas y también en los cuerpos de insectos pequeños, generalmente hormigas, sobre las cuales el micelio prolifera por todo el sistema nervioso, tomando control del insecto y logrando moverlo a su disposición.</p> 
                      <p>Por lo general el hongo busca ramas altas y espacios abiertos,
                      donde el hongo tendrá mejor altura para tirar esporas en un mayor rango.</p>
                      <p>Este hongo puede ser utilizado en destilados sub linguales con los cuales se aumentan lso niveles de testosterona y aumentan los niveles de energía </p>
                    
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; MycoApp 2021
          </p>
        </div>
      </footer>
    </>
  );
}

export default MushroomCordyceps;