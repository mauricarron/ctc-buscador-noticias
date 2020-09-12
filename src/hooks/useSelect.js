import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select className="browser-default">
      <option value="">Seleccionar</option>
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
