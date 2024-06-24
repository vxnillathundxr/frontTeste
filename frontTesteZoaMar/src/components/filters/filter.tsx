import ColorFilter from "./colorFilter";
import SizeFilter from "./sizeFilter";

export function Filter(){
    return(
        <div className='md:w-1/4 w-[80vw] md:h-1/4 h-auto md:p-16 p-5'>
            <div className='bg-zinc-300 p-5 rounded '>
                <h1 className='text-xl'>filtros</h1>
                <SizeFilter/>
                <ColorFilter/>
                {/* <button 
                className='hover:scale-105 duration-200 rounded-lg bg-black font-bold text-xl text-white p-1 mb-2 cursor-pointer'

                >
                Aplicar
                </button> */}
            </div>
        </div>
    )
}