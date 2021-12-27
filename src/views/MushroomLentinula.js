import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomLentinula() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Shiitake.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Lentinula edodes</h1>
            <h1 className="font-weight-light"> Seta China - Shiitake</h1>
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
                  Este hongo se puede encontrar en Asia Oriental
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                  <h1> Shiitake (Lentinula edodes) marinado con soja y jengibre </h1>
                    <h3>Ingredientes</h3>
                    <li>400 gramos de setas shiitake</li>
                    <li>1 rodaja de jengibre</li>
                    <li>2 dientes de ajo</li>
                    <li>90 gramos de salsa de soja</li>
                    <li>16 gramos de aceite de sésamo</li>
                    <li>25 gramos de vinagre de arroz</li>
                    <li>25 gramos de piñones,</li>
                    <li>Una pizca de sal</li>
                    <li>Aceite de oliva virgen extra</li>
                    <li>cilantro fresco</li>
                    <li>shichimi togarashi.</li>
  
                    <h3>Instrucciones</h3>
                    <li>Limpia bien las setas y retírales el pie, puedes utilizarlo igual que los sombreros en esta receta o guardarlos para hacer algún caldo o salsa. </li>
                    <li>Si las setas shiitake son muy grandes córtalas en dos o tres trozos, también se pueden dejar enteras, todo depende del gusto y del plato en el que se vayan a servir.</li>
                    <li>Prepara la marinada, pela y ralla el jengibre fresco, pela y ralla también los dientes de ajo y pon ambos ingredientes en un plato hondo y amplio. </li>
                    <li>Añade la salsa de soja, el aceite de sésamo y el vinagre de arroz, mezcla bien. </li>
                    <li>Incorpora las setas y con ayuda de una cuchara ve impregnándolas todas muy bien, tanto por la parte exterior del sombrero como por el interior. </li>
                    <li>Esto será necesario hacerlo bien con todas las setas, pues con la marinada preparada no quedan sumergidas, pero es más que suficiente para enriquecer las shiitake en sabor.</li>
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

export default MushroomLentinula;