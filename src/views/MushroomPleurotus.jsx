import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomPleoratus() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Pleorotus.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Pleurotus ostreatus </h1>
            <h1 className="font-weight-light"> Champiñon Ostra </h1>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">¿Es comestible?</h2>
                <p className="card-text">
                  Este hongo es comestible y muy sabroso
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
                  Lo puedes encontrar en varias partes del mundo debido a su cultivo comercial. 
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                    <h1>Pleurotus con vegetales y papa camote</h1>
                    <h3>Ingredientes</h3>
                    <li>2 papas camotes grandes</li>
                    <li>1 bandeja champiñones ostras (puede ser reemplazado por cualquier tipo de champiñones</li>
                    <li>1 zapallo italiano mediano</li>
                    <li>1 pimiento morón verde</li>
                    <li>1 zanahoria grande</li>
                    <li>1 atado cilantro</li>
                    <li>1 pizca sal de mar</li>
                    <li>1 pizca pimienta gruesa</li>
                    <li>3 cditas de salsa de soya pequeña </li>
                    <h3>Instrucciones</h3>
                    <li>Las papas camotes 🍠 se lavan, se ponen a hervir con piel, una vez cocidas se les hace un corte central a lo largo y se puede rellenar con queso 🧀 y cilantro, para llevar al horno a derretir.</li>
                    <li>Las verduras se lavan, pelan y se pican en tiritas, se saltean en aceite de oliva, la zanahoria, zapallo italiano, el morón y una vez que están las verduras listas, al final se le incorpora los champiñones ostras, se le agrega sal o solo pimienta y salsa de soya.</li>
                    
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

export default MushroomPleoratus;
