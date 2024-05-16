import React, {useState} from "react"


// interface SrcProps{
//     src: string
// }
export function HandleClick (){

        const Handle = () => {
            const [mostrarInput, setMostrarInput] = useState(false);
            
            const handleClick = () => {
                setMostrarInput(true);
            };

            return(
                <div>
                    {mostrarInput ? (<input placeholder="Buscar..."/>) : (<button onClick={handleClick}></button> )}
                </div>
            )
        }
            
}