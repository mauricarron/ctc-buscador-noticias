import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  const [categoria, guardarCategoria] = useState("");

  useEffect(() => {
    const consultarApi = async () => {
      const API_KEY = `84d4a2ae31ee44fdb21ece0cbd9d961b`;
      const url =
        `http://newsapi.org/v2/top-headlines?` +
        `country=ar&` +
        `category=${categoria}&` +
        `apiKey=${API_KEY}`;
      const noticias = await axios.get(url);
      console.log(noticias.data.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>
    </Fragment>
  );
}

export default App;
