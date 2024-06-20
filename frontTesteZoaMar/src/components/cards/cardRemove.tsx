import React from 'react';

interface CardRemoveProps {
   title: string
   searchID: string
   searchTag: string
   remove: string
   
}

const CardRemove: React.FC<CardRemoveProps> = ({title, searchID, searchTag, remove}) =>{
    return(
        <div className='bg-zinc-300 w-60 h-115 rounded-lg overflow-hidden shadow-lg items-center '>
            <div className='flex flex-col gap-28 p-3 justify-center'>
                <h1 className='font-bold text-lg pl-8'>{title}</h1>
                <div className='flex flex-col justify-center gap-4'>
                    <input className='outline rounded gap-1 p-1 bg-white' type="text" placeholder={searchID}/>
                    <input className='outline rounded gap-1 p-1 bg-white' type="text" placeholder={searchTag}/>
                </div>
                <button className='hover:bg-zinc-500 hover:text-black hover:ease-linear ease-linear rounded-lg bg-black font-bold text-xl text-white p-1 mb-2'>{remove}</button>    
            </div>
        </div>
    )
}

export default CardRemove