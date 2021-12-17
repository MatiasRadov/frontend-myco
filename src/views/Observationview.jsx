import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { AiOutlinePaperClip } from "react-icons/ai";
import UploadImageToS3WithNativeSdk from "../components/UploadImageToS3WithNativeSdk"


const MushObserver = () => {
  const store = useContext(Context);
  const [formData, setFormData] = useState({
    Mushroom_name: "",
    body: "",
    img_url: "",
  }); console.log('parent rendered')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    store.actions.observation_register(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 pt-5 pb-5"
      enctype="multipart/form-data"
    >
      <div className="row">
        <div className="col mx-3">
          <div className="col-8">
            <div className="contenido mb-3">
            <label>
              Nombre del hongo observado
            </label>
              <input
                type="text"
                name="mushroom_name"
                onChange={(e) => handleChange(e)}
                className="form-control"
                placeholder="Nombre del hongo observado"
                aria-label="Nombre del hongo observado"
              />
            </div>
          </div>
          <div className="contenido mb-3">
            <label>
              Adjunta una foto de tu observación
              <AiOutlinePaperClip />
            </label>
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
                placeholder= "Acá podrías incluir en que localidad viste tu hongo o alguna pregunta que tengas del mismo"
                name="observation_body"
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <button type="submit" value="Enviar" className="btn btn-success">
              Enviar formulario
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MushObserver;
