import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomHericium() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Hericium+erinaceus.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Hericium erinaceus </h1>
            <h1 className="font-weight-light"> Melena de leon</h1>
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
                  Comunmente encontrado en Asia Oriental. 
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                  <h1> Propiedades del Hericium erinaceus </h1>
                    <li>Es un alimento excelente cuando está joven, y la textura de las setas cocinadas es a menudo comparada con los mariscos.</li>
                    <li>En la medicina popular China la Melena de León se usa desde hace mucho tiempo, especialmente para ayudar en el tratamiento de la ansiedad y la depresión, para prevenir la demencia, o en lesiones del sistema nervioso.</li>
                    <li>Aportes al bienestar general</li>
                    <li>Parece reducir la inflamación crónica y el estrés oxidativo</li>
                    <li> Ayuda en los procesos de Depresión y ansiedad</li>
                    <li>También se relaciona la mejora del funcionamiento del hipocampo con la reducción de la ansiedad y la depresión</li>
                    <li>Ayuda a la Memoria y el sistema nervioso. Estudios han avalado que ayuda a reducir la pérdida de memoria.</li>
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

export default MushroomHericium;