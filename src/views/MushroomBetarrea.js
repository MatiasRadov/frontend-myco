import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushrooBatarrea() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Battarrea+stevenii+GVF.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Batarrea Stevenni</h1>
            <h1 className="font-weight-light"> No tiene un nombre local</h1>
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
                  Este hongo se puede encontrar en climas deserticos
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                    <h1> Batarrea Stevinni </h1>
                    <p> Hongo poco común y pocas veces registrado</p> 
                      <p> Este especimen fue encontrado por el sector de Calama por Gustavo Velasquez. Micólogo de la U de Chile y fundador de la ONG Micelio Latino </p>
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

export default MushrooBatarrea;