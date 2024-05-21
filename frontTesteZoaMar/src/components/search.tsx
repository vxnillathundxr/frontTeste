// import React, {useState} from "react"
// import searchIcon from '../assets/searchIcon.svg'



// // interface SrcProps{
// //     src: string
// // }
// export function HandleClick(): any{

//         const Handle = () => {
//             const [mostrarInput, setMostrarInput] = useState(false);
            
//             const handleClick = () => {
//                 setMostrarInput(true);
//             };

//             return(
//                 <div>
//                     {mostrarInput ? (<input placeholder="Buscar..."/>) : (<button onClick={handleClick}><img src={searchIcon}  id="icone" className="size-6"/></button> )}
//                 </div>
//             )
//         }            
// }

import React, { useState } from "react";

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
          className="px-4 py-2 bg-blue-500 text-white rounded transition-opacity duration-300 hover:bg-blue-600"
          onClick={handleClick}
        >
          Botão
        </button>
      )}
      {mostrarInput && (
        <input
          type="text"
          className="absolute inset-0 px-4 py-2 bg-blue-100 border border-blue-500 rounded transition-opacity duration-300 focus:opacity-100"
          value={texto}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
};

export default BotaoParaInput;