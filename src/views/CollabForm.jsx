import React, { useContext } from "react";
import { Context } from "../store/appContext";

function CollabForm() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div classNameName="container">
        <div classNameName="row">
          <p>
            Eres mas que un aficionado de los honguitos y tienes muchas
            observaciones de hongos. Acá es el lugar donde puedes compartir con
            entusiastas y expertos del reino fungi todos tus hallazgos.
          </p>
          <p>
            También puedes interactuar con usuarios regulares contestando sus
            dudas o respondiendo sus formularios de reconocimiento.
          </p>
        </div>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa la especie"
              aria-label="Ingresa la especie"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa la localidad"
              aria-label="Ingresa la localidad"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Sobre que sustrato estaba creciendo el honguito (Tierra, madera, piedra)"
              aria-label="Sobre que sustrato estaba creciendo el honguito (Tierra, madera, piedra)"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Laminillas"
              aria-label="Laminillas"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Poros"
              aria-label="Poros"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="inputEmail4" className="form-label">
              Pileo
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Diametro"
              aria-label="Diametro"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Forma"
              aria-label="Forma"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Color"
              aria-label="Color"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Margen"
              aria-label="Margen"
            />
          </div>
          <div className="col">
            <label for="inputEmail4" className="form-label">
              Pie
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Altura"
              aria-label="Altura"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Color"
              aria-label="Color"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Anillo"
              aria-label="Anillo"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Diametro"
              aria-label="Diametro"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Volva"
              aria-label="Volva"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Adjunta las fotos de tu hongo observado"
              aria-label="Adjunta las fotos de tu hongo observado"
            />
            <a className="btn btn-success">Subir imagen</a>
            <input
              type="text"
              className="form-control"
              placeholder="Adjunta las fotos de su esporada (solo si las tienes)"
              aria-label="Adjunta las fotos de su esporada (solo si las tienes)"
            />
            <a className="btn btn-success">Subir imagen</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="input-group">
            <span class="input-group-text">Descripción</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <button type="submit" className="btn btn-success">
                  Enviar formulario
                </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollabForm;
