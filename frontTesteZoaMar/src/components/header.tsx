import BotaoParaInput from './search'
import BotaoParaMenu from './menu'
import ExpandableMenu from './menu'
import { Rabbit, ShoppingCart, UserRound } from 'lucide-react'
// import menuIcon from '../assets/menuIcon.svg'

export function Header(){
    return(
            // div principal
            <div className="w-full bg-black h-14">
                <div className="gap-2 md:px-5 pr-3 flex justify-between py-0 items-center">
            {/*div IconMenu e ZoaMar  */}
                    <div className="flex pt-3 ">
                        <nav className="flex items-center justify-center">
                            <div className="hidden max-md:block">
                            {/* <BotaoParaMenu /> */}
                            <ExpandableMenu />
                            </div>
                            <a href={'/'} className="text-white font-ns text-3xl md:text-4xl">Zoamar</a>
                        </nav>
                        {/* divCertesAbas */}
                    </div>
                    <div className="hidden md:block z-999 mr-20">
                        <nav className="flex gap-20 items-center justify-center mt-7">
                            <a className="text-white hover:scale-105 duration-100" href='/camisetas'>Camisetas</a>
                            <a className="text-white hover:scale-105 duration-100" href='/moletons'>Moletons</a>
                            <a className="text-white hover:scale-105 duration-100" href='/calcas'>Calças</a>
                            <a className="text-white hover:scale-105 duration-100" href='/tenis'>Tênis</a>
                        </nav>
                    </div>
                        {/* divs left */}   
                    <div className="flex gap-5">
                        <nav className="flex gap-4 mt-3 z-999">
                            <BotaoParaInput/> 
                            <a className='text-white hover:scale-125 duration-200' href='/user'><UserRound/></a>
                            <a className='text-white hover:scale-125 duration-200' href='/cart'><ShoppingCart/></a>
                            <a className='text-white hover:scale-125 duration-200' href='/adm'><Rabbit/></a>
                        </nav>
                    </div>
                </div>
            </div>
    )
}
 