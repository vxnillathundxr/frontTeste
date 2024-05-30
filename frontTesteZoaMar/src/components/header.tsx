import React, {useState} from 'react'
import BotaoParaInput from './search'
import BotaoParaMenu from './menu'
import ExpandableMenu from './menu'


import cartIcon from '../assets/cartIcon.svg' 
import userIcon from '../assets/userIcon.svg'
import { Search, ShoppingCart, UserRound } from 'lucide-react'
// import menuIcon from '../assets/menuIcon.svg'

export function Header(){
    return(
            // div principal
            <div className="w-full bg-black h-12 gap-2 p-5 flex flex-row justify-between pb-10">
             {/*div IconMenu e ZoaMar  */}
                <div className="flex pt-3">
                    <nav className="flex gap-2 items-center">
                        <div className="hidden max-md:block">
                        {/* <BotaoParaMenu /> */}
                        <ExpandableMenu />
                        {/* <a href=""><img src={menuIcon} /></a> */}
                        </div>
                        <a href={'/'} className="text-white text-2xl pb-1 max-md:mr-10">ZoaMar</a>
                    </nav>
                    {/* divCertesAbas */}
                </div>
                    <div className="hidden md:block">
                        <nav className="flex gap-20 items-center justify-center mt-3 ml-40 ">
                            <a className="text-white" href='/camisetas'>Camisetas</a>
                            <a className="text-white" href='/moletons'>Moletons</a>
                            <a className="text-white" href='/calcas'>Calças</a>
                            <a className="text-white" href='/tenis'>Tênis</a>
                        </nav>
                    </div>
                {/* divs left */}
                    <div className="flex gap-5 pb-">
                {/* div searchIcon */}
                    </div>
                    {/* userIcon e cartIcon */}
                    <div className="flex gap-5">
                            <BotaoParaInput />
                            {/* <img src={searchIcon}  id="icone" className="size-6"/> */}
                        <nav className="flex gap-4">
                            <a className='text-white' href='/user'><UserRound/></a>
                            <a className='text-white' href='/cart'><ShoppingCart/></a>
                        </nav>
                    </div>
            </div>
    )
}