import allStarIcon from '../assets/allStarIcon.svg'
import cartIcon from '../assets/cartIcon.svg' 
import searchIcon from '../assets/searchIcon.svg'
import userIcon from '../assets/userIcon.svg'

export function Header(){
    return(
        <div>
            <div className="bg-black w-full h-32 gap-2 p-5 flex flex-row justify-between">
                <div className='flex items-center flex-row gap-2'>
                    <h1 className="text-4xl">ZoaMar</h1>
                    <img src={allStarIcon}/>
                </div>
        {/* --------------------------------------------------------------------- */}
          <div className="pt-20">
                <nav className="flex gap-40">
                    <a href="">Camisetas</a>
                    <a href="">Calças</a>
                    <a href="">Moletons</a>
                    <a href="">Tênis</a>
                </nav>
          </div>
        {/* --------------------------------------------------------------------- */}
                <div className='flex flex-end justify-end gap-2'>
                    <div className='flex items-center'>
                        <img src={searchIcon} className="" />
                    </div>
                    <div className="">
                        <h1 className="text-center pt-3">Conta</h1>
                        <h1 className="text-center pt-3">Carrinho</h1>
                    </div>
                    <div className="flex-col ">
                        <img src={userIcon} />
                        <img src={cartIcon}  />
                    </div>
                </div>
            </div>
        </div>

    )
}