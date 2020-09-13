import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      value={state}
      onChange={(e) => e.target.value}
      className="browser-default"
    >
      {opciones.map((opcion) => (
        <option value={opcion.value} key={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
