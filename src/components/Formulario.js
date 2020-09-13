import React from "react";
import useSelect from "../hooks/useSelect";
import styles from "./Formulario.module.css";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarNoticia = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticia}>
          <h2 className={styles.heading}>Encuentras Noticias por Categoría</h2>
          <SelectNoticias />
          <div>
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles["btn-block"]}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
