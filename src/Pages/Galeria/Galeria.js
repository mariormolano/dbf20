import { useState, useEffect } from "react";
import "./Galeria.css";
import {Image, Tittle } from "../../Componets/UI";

const Galeria = () => {
  const [listaImagenes, setImagenes] = useState(null);

  useEffect(() => {
    const elementos = async () => {
      await fetch("/img/gallery/images.json")
        .then((response) => response.json())
        .then((data) => setImagenes(data))
        .catch((err) => console.log(err));
    };
    elementos();
  }, listaImagenes);

  const imagenes = listaImagenes?.imagenes;

  return (
    <div className="imagenes__container">
      <Tittle value={"Galería"} />;
      {listaImagenes
        ? imagenes.map((src, key) => (
            <Image src={`/img/gallery/${src}`} key={key} alt={key} />
          ))
        : null}
    </div>
  );
};

export default Galeria;
