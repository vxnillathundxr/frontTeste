import React, { useState } from "react";
import searchIcon from '../assets/searchIcon.svg'
import XIcon from '../assets/XIcon.svg'

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
      <div className="flex gap-2">
            {mostrarInput && (
              <input 
              type="text"
              className="flex flex-row border-2 w-full "
              value={texto}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Buscar..."
              ></input>
              )}
              {mostrarInput &&(
                <button className="" onClick={handleBlur}><img src={XIcon}/></button>
              )}
      </div>
     </div>
  );
};

export default BotaoParaInput;