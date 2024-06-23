import { CreditCard, Receipt} from "lucide-react";
import { Header } from "../components/header";
import pix from "../assets/pix.svg"
import { EndH } from "../components/endH";
import CartComponent from "../components/cartComponent";

export function CartPage(){
    return(
        <div>
            <div className="flex flex-col gap-10">
                <Header/>
                <div className="flex flex-col w-[100vw] h-scree  gap-9 justify-center md:pb-28 md:pt-28 pt-8 pb-8">
                    <div className="flex  flex-col md:flex-row w-[100vw] md:items-start items-center justify-center h-3/4 gap-10">
                        <div className="flex flex-col h-auto md:w-[40vw] w-[90vw] bg-zinc-300 md:p-10 p-3 rounded md:gap-16 gap-5 left-0">
                            <h1 className="font-bold text-4xl">Carrinho</h1>
                            <CartComponent
                            image="https://i.im.ge/2024/06/20/KHDZgD.moletomSol.jpeg"
                            name="Moletom Lozango"
                            price="R$149,90"
                            />
                            <CartComponent
                            image="https://i.im.ge/2024/06/20/KHDZgD.moletomSol.jpeg"
                            name="Moletom Lozango"
                            price="R$149,90"
                            />
                        </div>
                        <div className="flex flex-col h-auto md:w-[40vw] w-[90vw] bg-zinc-300 md:p-10 p-3 rounded gap-5">
                            <h1 className="font-bold text-2xl">Forma de pagamento</h1>
                            <div className="flex flex-col gap-7 items-center">
                                <div className="flex md:gap-36 gap-10 items-center justify-center md:w-[30vw] w-[90vw]">
                                    <div className="flex flex-col items-center">
                                        <img className="md:size-14 size-14 hover:scale-125 duration-200 hover:cursor-pointer" src={pix} alt="pix" />
                                        <a className="font-medium">Pix</a>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <CreditCard className="md:size-14 size-14 hover:scale-125 duration-200 hover:cursor-pointer"/>
                                        <a className="font-medium">Cartão</a>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Receipt className="md:size-14 size-14 hover:scale-125 duration-200 hover:cursor-pointer"/>
                                        <a className="font-medium">Boleto</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 left-0">
                                <h1 className="font-bold text-2xl">Endereço de entrega</h1>
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="flex h-auto w-full md:justify-normal justify-center">
                                        <input maxLength={8} className="bg-zinc-500 placeholder:text-white rounded md:w-[10vw] w-[80vw] p-2 max"  placeholder="CEP" type="number" />
                                    </div>
                                    <div className="flex h-auto w-full md:justify-normal justify-center">
                                        <input className="bg-zinc-500 placeholder:text-white rounded md:w-[10vw] w-[80vw] p-2"  placeholder="Estado" type="text" />
                                    </div>
                                    <div className="flex h-auto w-full md:justify-normal justify-center">
                                        <input className="bg-zinc-500 placeholder:text-white rounded md:w-[10vw] w-[80vw] p-2"  placeholder="Cidade" type="text" />
                                    </div>
                                    <div className="flex md:flex-row flex-col md:pl-0 pl-2 h-auto w-full md:justify-normal justify-center md:gap-1 gap-2">
                                        <input className="bg-zinc-500 placeholder:text-white rounded md:w-[25vw] w-[80vw] p-2"  placeholder="Rua" type="text" />
                                        <input className="bg-zinc-500 placeholder:text-white rounded p-2 md:w-[5vw] w-[30vw]" placeholder="N°" type="number" />
                                    </div>
                                    <div className="flex h-auto w-full md:justify-normal justify-center">
                                        <input className="bg-zinc-500 placeholder:text-white rounded md:w-96 w-[80vw] p-2"  placeholder="Complemento" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center w-full">
                                <button className="bg-black rounded text-white md:w-[10vw] w-[50vw] h-11 hover:scale-105 duration-200">Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    <EndH/>
        </div>
    )
}