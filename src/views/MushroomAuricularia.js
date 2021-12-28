import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomAuricularia() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Auricularia-auricular-judae.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Auricularia auricular-judae </h1>
            <h1 className="font-weight-light"> Orejas de Judas -- Orejas de Madera</h1>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Es comestible?</h2>
                <p className="card-text">
                  Este hongo es comestible. 
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
                  Este hongo se puede encontrar solo en Chile desde el Maule hacia el Sur. 
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                  <h1> Propiedades del Auricularia auricular-judae</h1>
                    <p>Es comestible y muy apreciado en la cocina oriental 
                      (es el "hongo negro" de los restaurantes chinos, en China se cultivan sobre troncos muertos).
                      Se puede comer crudo, aunque no tiene un sabor muy marcado, pero por su aspecto suele usarse 
                      como decoración de ensaladas. También puede comerse frito o en sopas</p>
                    <li>Tiene propiedades antibacteriales</li>
                    <li>Ayuda a controlar la diabetes</li>
                    <li>Posee un componente activo que tiene propiedades anti tumores</li>
                    <li>Ayuda a bajar los indices del colesterol</li>
                    <li>Tiene propiedades anticoagulatorias, antioxidantes, radioprotectivas e inmunomodelatorias</li>
                    <li>Ayuda contra la anemia</li>
                    <li>Ayuda a prevenir la obesidad</li>
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

export default MushroomAuricularia;