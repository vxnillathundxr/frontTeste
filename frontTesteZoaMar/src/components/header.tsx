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
                    <nav className="flex items-center">
                        <div className="m-0 p-0">
                        {/* <BotaoParaMenu /> */}
                        <ExpandableMenu />
                        {/* <a href=""><img src={menuIcon} /></a> */}
                        </div>
                        <a href={'/'} className="text-white text-2xl pb-1">ZoaMar</a>
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