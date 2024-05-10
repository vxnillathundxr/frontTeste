import cartIcon from '../assets/cartIcon.svg' 
import searchIcon from '../assets/searchIcon.svg'
import userIcon from '../assets/userIcon.svg'
import menuIcon from '../assets/menuIcon.svg'

export function Header(){
    return(
        <div className="w-full">
            <div className="bg-black w-full h-12 gap-2 p-5 flex flex-row justify-between">
                <div className='flex items-center flex-row gap-2'>
                <img src={menuIcon} />
                    <h1 className="text-2xl">ZoaMar</h1>
                </div>
                <div className='flex flex-end justify-end gap-2'>

                        <div className="flex gap-5 items-center">
                            <img src={searchIcon} className="size-6"/>
                            <img src={userIcon}  className="size-6"/>
                            <img src={cartIcon}  className="size-6"/>
                        </div>
                </div>
            </div>
        </div>

    )
}
{/* <div className="pt-20">
      <nav className="flex gap-40">
          <a href="">Camisetas</a>
          <a href="">Calças</a>
          <a href="">Moletons</a>
          <a href="">Tênis</a>
      </nav>
</div> */}