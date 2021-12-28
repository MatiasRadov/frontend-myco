import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { NavLink } from "react-router-dom";

function MushroomRamaria() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-pleurotus">
      <div className="px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://mycoapp.s3.amazonaws.com/Mushrooms/Ramaria+sp+GVF.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-muted"> Ramaria Flava</h1>
            <h1 className="font-weight-light"> Changle</h1>
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
                  <h1> Empanadas de Changle </h1>
                    <h3>Ingredientes para masa</h3>
                    <li>1 taza de harina</li>
                    <li>1 taza de harina integral</li>
                    <li>1 pizca de sal</li>
                    <li>1 cucharada de aceite de oliva</li>
                    <li>1 cucharada de aceite de maravilla</li>
                    <h3>Ingredientes para relleno</h3>
                    <li>800 g de changles limpios</li>
                    <li>2 cebollas</li>
                    <li>1 cucharadita de chascú</li>
                    <li>1 pizca de sal</li>
                    <li>1 pizca de merkén</li>
                    <li></li>
  
                    <h3>Instrucciones</h3>
                    <li>Precalentar el horno a 200°.</li>
                    <li>Para la masa, mezclar ambas harinas y formar un volcán. </li>
                    <li>Echar en el centro ambos aceites y la sal.</li> 
                    <li>Revolver todo e ir agregando agua tibia hasta obtener una masa que se pueda amasar. </li>
                    <li>Dividir la masa en diez bolitas. Uslerear cada una y cortar un círculo usando un plato como molde (aprox. 12 cm de diámetro).</li>

                    <li>En un sartén a fuego suave, echar los changles limpios y dejar que se absorba su propia agua. </li>
                    <li>Agregar una pizca de sal y reservar.  </li>
                    <li>Sofreír la cebolla hasta que, nuevamente, absorba su propia agua. </li>
                    <li>Agregar un poco de sal y agregar un poquito de aceite. </li>
                    <li>Sofreír hasta dorar.</li> 
                    <li>Agregar los changles y rehogar por unos minutos.</li> 
                    <li>Agregar el chascú picado fino y el merkén.</li>

                    <li>Disponer la masa y echar unas dos cucharadas del relleno de changle.</li> 
                    <li>Mojar con agua el borde de la masa con el dedo y cerrar.</li> 
                    <li>Presionar los bordes con los dedos hasta sellar. </li>
                    <li>Realizar los dobleces clásicos de empanadas hacia adentro para un buen sellado.</li> 
                    <li>Pinchar la superficie con un tenedor y pincelar con una mezcla de yema de huevo diluida en un poco de agua. </li>
                    <li>Aceitar la lata del horno y poner las empanadas por unos 15 minutos a 180°. </li>
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

export default MushroomRamaria;