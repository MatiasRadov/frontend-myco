import React, { useContext } from "react";
import { Context } from "../store/appContext";

function CollabForm() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contenido mt-3 mb-5">
              <p>
                Eres mas que un aficionado de los honguitos y tienes muchas
                observaciones de hongos. Acá es el lugar donde puedes compartir
                con entusiastas y expertos del reino fungi todos tus hallazgos.
              </p>
              <p>
                También puedes interactuar con usuarios regulares contestando
                sus dudas o respondiendo sus formularios de reconocimiento.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="contenido mb-3">
              <input
                type="text"
                name="especie"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Ingresa la especie"
                aria-label="Ingresa la especie"
              />
            </div>
            <div className="col 8">
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="localidad"
                  onChange={(e) => actions.handleChange(e)}
                  className="pt-2 form-control"
                  placeholder="Ingresa la localidad"
                  aria-label="Ingresa la localidad"
                />
              </div>
            </div>
            <div className="col 8">
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="sustrato"
                  onChange={(e) => actions.handleChange(e)}
                  className="form-control pt-2"
                  placeholder="Sobre que sustrato estaba creciendo el honguito (Tierra, madera, piedra)"
                  aria-label="Sobre que sustrato estaba creciendo el honguito (Tierra, madera, piedra)"
                />
              </div>
            </div>
            <div className="col 8">
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="laminillas"
                  onChange={(e) => actions.handleChange(e)}
                  className="form-control pt-2"
                  placeholder="Laminillas"
                  aria-label="Laminillas"
                />
              </div>
            </div>
            <div className="col 8">
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="poros"
                  onChange={(e) => actions.handleChange(e)}
                  className="form-control"
                  placeholder="Poros"
                  aria-label="Poros"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="inputEmail4" className="form-label">
              Pileo
            </label>
            <div className="contenido mb-3">
              <input
                type="text"
                name="diametro"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Diametro"
                aria-label="Diametro"
              />
            </div>
            <div className="contenido mb-3">
              <input
                type="text"
                name="forma"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Forma"
                aria-label="Forma"
              />
            </div>
            <div className="contenido mb-3">
              <input
                type="text"
                name="color"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Color"
                aria-label="Color"
              />
            </div>
            <div className="contenido mb-3">
              <input
                type="text"
                name="margen"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Margen"
                aria-label="Margen"
              />
            </div>
          </div>
          <div className="col">
            <label for="inputEmail4" className="form-label">
              Pie
            </label>
            <div className="contenido mb-3">
              <input
                type="text"
                name="altura"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Altura"
                aria-label="Altura"
              />
            </div>
            <div className="contenido mb-3">
              <input
                type="text"
                name="color"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Color"
                aria-label="Color"
              />
            </div>
            <div className="contenido mb-3">
              <input
                type="text"
                name="anillo"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Anillo"
                aria-label="Anillo"
              />
            </div>
            <div className="contenido mb-3">
              <input
                type="text"
                name="diametro"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Diametro"
                aria-label="Diametro"
              />
            </div>
            <div className="contenido mb-5">
              <input
                type="text"
                name="volva"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Volva"
                aria-label="Volva"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="contenido mb-3">
              <input
                type="text"
                name="add-img"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Adjunta las fotos de tu hongo observado"
                aria-label="Adjunta las fotos de tu hongo observado"
              />
              <a className="btn btn-success">Subir imagen</a>
            </div>
            <div className="contenido mb-3">
              <input
                type="file"
                name="add-esporada"
                onChange={(e) => actions.handleChange(e)}
                className="form-control"
                placeholder="Adjunta las fotos de su esporada (solo si las tienes)"
                aria-label="Adjunta las fotos de su esporada (solo si las tienes)"
              />
              <a className="btn btn-success">Subir imagen</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="contenido mb-5">
              <div class="input-group">
                <span class="input-group-text">Descripción</span>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Enviar formulario
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollabForm;
