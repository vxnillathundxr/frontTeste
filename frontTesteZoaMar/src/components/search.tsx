import React, {useState} from "react"
import searchIcon from '../assets/searchIcon.svg'



// interface SrcProps{
//     src: string
// }
export function HandleClick(): any{

        const Handle = () => {
            const [mostrarInput, setMostrarInput] = useState(false);
            
            const handleClick = () => {
                setMostrarInput(true);
            };

            return(
                <div>
                    {mostrarInput ? (<input placeholder="Buscar..."/>) : (<button onClick={handleClick}><img src={searchIcon}  id="icone" className="size-6"/></button> )}
                </div>
            )
        }            
}