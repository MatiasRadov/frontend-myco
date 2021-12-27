import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomPhallus() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Phallus+indusiatus_--CA.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Phallus Indusiatus </h1>
            <h1 className="font-weight-light"> velo de novia - hongo del bamboo</h1>
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
                Aparece en bosques y jardines, en suelo rico en restos leñosos bien descompuestos, bajo clima tropical. Se encuentra en el sur de Asia, en África, en América y en Australia. 
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                    <h1> Phallus Indusiatus</h1>
                    <p> Phallus indusiatus se puede distinguir de otras especies similares por su distribución, por el tamaño, el color y la longitud del indusio. </p> 
                      <p> En Asia se preparan los individuos inmaduros como alimento en sopas, y frituras. En China se considera como un manjar. Se cultiva con este fin, y se deben consumir antes de que hayan eclosionado desde la volva y aparezca la gleba maloliente. Se le atribuyen propiedades medicinales</p>
                      <p> Los cuerpos frutales inmaduros de P. indusiatus están inicialmente encerrados en una estructura subterránea en forma de huevo o aproximadamente esférica encerrada en un peridio. El "huevo" tiene un color que va del blanquecino al beige al marrón rojizo, mide hasta 6 cm (2,4 pulgadas) de diámetro y generalmente tiene un cordón micelial grueso adherido en la parte inferior.</p>
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

export default MushroomPhallus;