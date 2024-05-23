import React, {useState} from 'react'
import BotaoParaInput from './search'
import BotaoParaMenu from './menu'
import ExpandableMenu from './menu'


import cartIcon from '../assets/cartIcon.svg' 
import userIcon from '../assets/userIcon.svg'
// import menuIcon from '../assets/menuIcon.svg'

export function Header(){
    return(
            // div principal
            <div className="w-full bg-black h-12 gap-2 p-5 flex flex-row justify-between pb-10">
             {/*div IconMenu e ZoaMar  */}
                <div className="flex gap-2 pt-3">
                    <nav className="flex items-center gap-2">
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
                            <a href='/user'><img src={userIcon}  className="size-6"/></a>
                            <a href='/cart'><img src={cartIcon}  className="size-6"/></a>
                        </nav>
                    </div>
            </div>
    )
}