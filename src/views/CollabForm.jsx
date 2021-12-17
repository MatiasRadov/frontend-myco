import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { AiOutlinePaperClip } from "react-icons/ai";
import UploadImageToS3WithNativeSdk from "../components/UploadImageToS3WithNativeSdk";

function CollabForm() {
  const { store, actions } = useContext(Context);

  const [state, setState] = useState({
    species: "",
    location: "",
    substrate: "",
    gills: "",
    pores: "",
    pileus_diameter: "",
    shape: "",
    pileus_color: "",
    margin: "",
    height: "",
    foot_color: "",
    ring: "",
    foot_diameter: "",
    volva: "",
    mush_img: "",
    spore_img: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    actions.sendCollabForm(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-collab">
        <div className="row">
          <div className="col">
            <div className="contenido mt-3 mb-5 mx-3 text-white">
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
        <form classname="form mb-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-8 mx-3">
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="species"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Ingresa la especie"
                  aria-label="Ingresa la especie"
                />
              </div>
              <div className="col-8">
                <div className="contenido mb-3">
                  <input
                    type="text"
                    name="location"
                    onChange={(e) => handleChange(e)}
                    className="pt-2 form-control"
                    placeholder="Ingresa la localidad"
                    aria-label="Ingresa la localidad"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="contenido mb-3">
                  <input
                    type="text"
                    name="substrate"
                    onChange={(e) => handleChange(e)}
                    className="form-control pt-2"
                    placeholder="Sobre que sustrato estaba creciendo el honguito (Tierra, madera, piedra)"
                    aria-label="Sobre que sustrato estaba creciendo el honguito (Tierra, madera, piedra)"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="contenido mb-3">
                  <input
                    type="text"
                    name="gills"
                    onChange={(e) => handleChange(e)}
                    className="form-control pt-2"
                    placeholder="Laminillas"
                    aria-label="Laminillas"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="contenido mb-3">
                  <input
                    type="text"
                    name="pores"
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    placeholder="Poros"
                    aria-label="Poros"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-3">
            <div className="col">
              <label for="inputEmail4" className="form-label">
              <strong>Pileo</strong>
              </label>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="pileus_diameter"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Diametro"
                  aria-label="Diametro"
                />
              </div>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="shape"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Forma"
                  aria-label="Forma"
                />
              </div>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="pileus_color"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Color"
                  aria-label="Color"
                />
              </div>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="margin"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Margen"
                  aria-label="Margen"
                />
              </div>
            </div>
            <div className="col">
              <label for="inputEmail4" className="form-label">
                <strong>Pie</strong>
              </label>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="height"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Altura"
                  aria-label="Altura"
                />
              </div>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="foot_color"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Color"
                  aria-label="Color"
                />
              </div>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="ring"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Anillo"
                  aria-label="Anillo"
                />
              </div>
              <div className="contenido mb-3">
                <input
                  type="text"
                  name="foot_diameter"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Diametro"
                  aria-label="Diametro"
                />
              </div>
              <div className="contenido mb-5">
                <input
                  type="text"
                  name="volva"
                  onChange={(e) => handleChange(e)}
                  className="form-control"
                  placeholder="Volva"
                  aria-label="Volva"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mx-3">
              <div className="contenido mb-3 text-white">
                <label>Adjunta las fotos de tu hongo observado <AiOutlinePaperClip /></label>
                <UploadImageToS3WithNativeSdk/>
              </div>
              <div className="contenido mb-3 text-white">
              <label>Adjunta las fotos de tu esporada (solo si las tienes) <AiOutlinePaperClip /></label>
                <UploadImageToS3WithNativeSdk/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mx-3">
              <div className="contenido mb-5">
                <div className="input-group">
                  <span className="input-group-text">Descripción</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <button type="submit" value='Enviar' className="btn btn-success">
                  Enviar formulario
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CollabForm;
