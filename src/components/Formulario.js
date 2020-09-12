import React from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Encuentras Noticias por Categoría</h2>
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
