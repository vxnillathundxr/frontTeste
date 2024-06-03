import React, { useState } from "react";
import XIcon from '../assets/XIcon.svg'
import { Search, X } from "lucide-react";

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
    <div className="top-4 left-4 ">
        <div>
            {!mostrarInput && (
              <button
                className="flex size-6 text-white rounded transition-opacity duration-300 hover:bg-white-600/10 "
                onClick={handleClick}
              >
                <Search/>
              </button>
            )}
        </div>
        <div className="flex gap-2 top-0 bg-white justify-center items-center">
            {mostrarInput && (
              <input 
              type="text"
              className=" absolute left-0 pl-6 md:pl-96 top-0 w-[100vw] border-none outline-none h-14 bg-zinc-300"
              value={texto}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Buscar..."
              >
              </input>
              )}
              {mostrarInput &&(
           <button className=" text-black absolute right-3 mt-5 md:right-96" onClick={handleBlur}><img src={XIcon}/></button>
           )}
      </div>
     </div>
  );
};

export default BotaoParaInput;

// pl-96 right-96

// Cod para que o input de Search localize cada href present no cod :)

// import React from 'react';

// // Lista de URLs
// const urls = {
//   home: '/',
//   about: '/about',
//   contact: '/contact',
//   services: '/services',
//   // Adicione quantos URLs você precisar
// };

// const App: React.FC = () => {
//   // Função para redirecionamento
//   const handleRedirect = (url: string) => {
//     window.location.href = url;
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">Escolha um destino:</h1>
//         {/* Mapeando os URLs e criando um input para cada */}
//         {Object.entries(urls).map(([key, value]) => (
//           <input
//             key={key}
//             type="button"
//             value={key}
//             onClick={() => handleRedirect(value)}
//             className="cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 mb-2 hover:bg-blue-700"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;