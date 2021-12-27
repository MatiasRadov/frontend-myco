import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function Collaboration () {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Cultivo_agaricus.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Agaricus bisporus </h1>
            <h1 className="font-weight-light"> Hongo Paris, Champiñones.  </h1>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Características (especie, localidad, sustrato) </h2>
                <p className="card-text">
                Es la especie de hongo comestible más comúnmente usada para la cocina.                 </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Pileo (diámetro, forma, color, margen)</h2>
                <p className="card-text">
                 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Pie (altura, color, anillo, diámetro, volva)</h2>
                <p className="card-text">
                 </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                    <h1>Descripción</h1>
                    <h3>Ingredientes</h3>
                    <li>200 g champiñones de París, limpios y cortados en cubitos</li>
                    <li>2 cebollines, cortados en rodelas finas</li>
                    <li>1/2 pimentón rojo, picado en cubitos</li>
                    <li>1/2 pimentón verde, cortado en cubitos</li>
                    <li>1-2 láminas jengibre fresco, rallado</li>
                    <li>1/2 taza jugo de limón, recién exprimido</li>
                    <li>1/2 taza cilantro fresco, picado finamente</li>
                    <li>Pimienta negra, recién molida</li>
                    <li>Aceite de oliva</li>
                    <li>2 cdas. maní picado (opcional, pero recomendado!)</li>

                    <h3>Instrucciones</h3>
                    <li>Incorpora a un bol los champiñones, el cebollín picado, los pimentones, la ralladura de jengibre y el cilantro picado.</li>
                    <li>Deja reposar adentro del refrigerador por unos minutos para que todos los sabores de integren.</li>
                    <li>Esparce el maní picado y sirve acompañado con tostadas.</li>
                    <li>A disfrutar!</li>
                                        
                  </ul>
                </div>
              </p>
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

export default Collaboration;
