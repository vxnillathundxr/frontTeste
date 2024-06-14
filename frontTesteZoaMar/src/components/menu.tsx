import React, { useState } from 'react';
import menuIcon from '../assets/menuIcon.svg'
// import XIcon from '../assets/XIcon.svg'


const ExpandableMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-999">
      <button
        className=" text-white py-2 px-4 rounded"
        onClick={toggleMenu}
      >
             <img src={menuIcon} alt="menuIcon" />
      </button>
      {isOpen && (
        <div className="flex flex-col absolute mt-2 bg-zinc-300 h-96 w-[100vw] justify-center items-center p-2 gap-8 font-medium text-2xl rounded shadow">
          <div className='flex w-[110px] border-b border-black justify-center'>
            <a href='/camisetas' className="block py-1">Camisetas</a>
          </div>
          <div className='flex w-[110px] border-b border-black justify-center'>
            <a href='/moletons' className="block py-1">Moletons</a>
          </div>
          <div className='flex w-[110px] border-b border-black justify-center'>
            <a href='/calcas' className="block py-1">Calças</a>
          </div>
          <div className='flex w-[110px] border-b border-black justify-center'>
            <a href='/tenis' className="block py-1">Tênis</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableMenu;
// const BotaoParaMenu: React.FC = () => {
//   const [mostrarMenu, setMostrarMenu] = useState<boolean>(false);
//   const [texto, setTexto] = useState<string>("");

//   const handleClick = () => {
//     setMostrarMenu(true);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTexto(event.target.value);
//   };

//   const handleBlur = () => {
//     setMostrarMenu(false);
//   };

//   return (
//     <div className="  ">
//             {!mostrarMenu && (
//               <button
//                 className="flex size-6 text-white rounded transition-opacity duration-300 hover:bg-white-600/10"
//                 onClick={handleClick}
//               >
//                 <img src={menuIcon} alt="searchIcon" />
//               </button>
//             )}
//       <div className="flex gap-2 w-full">
//             {mostrarMenu && (
//                <div
//                    onChange={handleChange}
//                    onBlur={handleBlur}
//                    className="flex bg-black h-full w-20 "
                
//                    >
                   
//                </div>
//               )}
//               {mostrarMenu &&(
//            <button className="" onClick={handleBlur}><img src={XIcon}/></button>
//            )}
             
//       </div>
//      </div>
//   );
// };

// export default BotaoParaMenu;
