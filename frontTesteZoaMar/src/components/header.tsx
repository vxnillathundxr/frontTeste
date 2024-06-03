import BotaoParaInput from './search'
import BotaoParaMenu from './menu'
import ExpandableMenu from './menu'
import { Search, ShoppingCart, UserRound } from 'lucide-react'
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
                            <a href={'/'} className="text-white text-2xl">ZoaMar</a>
                        </nav>
                        {/* divCertesAbas */}
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex gap-20 items-center justify-center mt-7">
                            <a className="text-white" href='/camisetas'>Camisetas</a>
                            <a className="text-white" href='/moletons'>Moletons</a>
                            <a className="text-white" href='/calcas'>Calças</a>
                            <a className="text-white" href='/tenis'>Tênis</a>
                        </nav>
                    </div>
                        {/* divs left */}   
                    <div className="flex gap-5">
                        <nav className="flex gap-4 mt-3">
                            <BotaoParaInput/> 
                            <a className='text-white' href='/user'><UserRound/></a>
                            <a className='text-white' href='/cart'><ShoppingCart/></a>
                        </nav>
                    </div>
                </div>
            </div>
    )
}
 