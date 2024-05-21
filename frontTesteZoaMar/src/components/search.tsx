import React, { useState } from "react";
import searchIcon from '../assets/searchIcon.svg'

const BotaoParaInput: React.FC = () => {
  const [mostrarInput, setMostrarInput] = useState<boolean>(false);
  const [texto, setTexto] = useState<string>("");

  const handleClick = () => {
    setMostrarInput(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
  };

  const handleBlur = () => {
    setMostrarInput(false);
  };

  return (
    <div className="relative">
      {!mostrarInput && (
        <button
          className="flex size-6 text-white rounded transition-opacity duration-300 hover:bg-white-600/10"
          onClick={handleClick}
        >
          <img src={searchIcon} alt="searchIcon" />
        </button>
      )}
      {mostrarInput && (
        <input
          type="text"
          className="flex h-10 w-full pb-10 bg-white rounded transition-opacity duration-300 focus:opacity-100"
          value={texto}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}

    </div>
  );
};

export default BotaoParaInput;