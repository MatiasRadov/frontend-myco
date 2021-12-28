import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomBispori() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Amanita+bisporigeria.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Amanita Bisporigera</h1>
            <h1 className="font-weight-light"> Angel de la muerte</h1>
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
                  Este hongo se puede encontrar en plantaciones de coniferos (pinos)
                </p>
              </div>
            </div>
          </div>
          <div className="card text-white bg-secondary my-5 py-4">
            <div className="card-body">
              <p className="text-white m-0">
                <div>
                  <ul>
                    <h1> Amanita Bisporigera </h1>
                    <p> Es uno de los hongos mas venenos que se pueden encontrar de manera mas regular. </p> 
                      <p> El hongo tiene un color blanco liso, la tapa puede alcanzar hasta 10 centímetros de diámetro y 14 centímetros de espesor, la superficie es seca y si el ambiente esta húmedo se pone pegajosa. Tienen una delicada falda blanca-como anillo en la parte superior.</p>
                      <p> Esta especies de Amanita contiene amatoxinas, péptidos cíclicos que inhiben la enzima ARN polimerasa II e interfieren con varias funciones celulares. Los primeros síntomas de envenenamiento aparecen de 6 a 24 horas después del consumo, seguidos de un período de aparente mejoría, seguidos a continuación, por los síntomas del hígado y la insuficiencia renal, la muerte de quien la consuma deviene al cuarto día. </p>
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

export default MushroomBispori;