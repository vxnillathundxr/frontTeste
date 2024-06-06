import { CreditCard, Pencil, Receipt} from "lucide-react";
import blusa from "../assets/blusa.svg"
import { Header } from "../components/header";
import pix from "../assets/pix.svg"

export function CartPage(){
    return(
        <div>
            <Header />
            <div className="flex flex-col w-full h-screen items-center gap-9 justify-center pb-40">
                <div className="flex w-full items- justify-center h-3/4 gap-10">
                    <div className="flex flex-col h-full w-[40vw] bg-zinc-300 p-10 rounded gap-16">
                        <h1 className="font-bold text-4xl">Carrinho</h1>
                        <div className="flex flex-col text-3xl font-medium gap-16">
                            <div className="flex border-b-2 border-black items-center p-3 gap-4">
                                <img className="size-24" src={blusa}/>
                                <div className="flex w-full justify-between">
                                    <div className="flex flex-col ">
                                        <a>Moletom Lozango</a>
                                        <div className="flex gap-6">
                                            <a>-</a>
                                            <a>1</a>
                                            <a className="bg-black text-white rounded-full h-8 w-8 items-center text-center pb-8">+</a>
                                        </div>
                                    </div>
                                    <a>R$149,90</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-[40vw] bg-zinc-300 p-10 rounded gap-5">
                        <h1 className="font-bold text-2xl">Forma de pagamento</h1>
                        <div className="flex flex-col gap-7 items-center">
                            <div className="flex gap-36 items-center">
                                <div className="flex flex-col items-center">
                                    <img className="size-20 hover:scale-110 duration-200" src={pix} alt="pix" />
                                    <a className="font-medium">Pix</a>
                                </div>
                                <div className="flex flex-col items-center">
                                    <CreditCard className="size-20 hover:scale-110 duration-200"/>
                                    <a className="font-medium">Cartão</a>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Receipt className="size-20 hover:scale-110 duration-200"/>
                                    <a className="font-medium">Boleto</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 left-0">
                            <h1 className="font-bold text-2xl">Endereço de entrega</h1>
                            <div className="flex flex-col gap-2 text-white">
                                <div className="flex h-auto w-full">
                                    <input maxLength={8} className="bg-zinc-500 placeholder:text-white rounded w-[10vw] p-2 max"  placeholder="CEP" type="number" />
                                </div>
                                <div className="flex h-auto w-full">
                                    <input className="bg-zinc-500 placeholder:text-white rounded w-[10vw] p-2"  placeholder="Estado" type="text" />
                                </div>
                                <div className="flex h-auto w-full">
                                    <input className="bg-zinc-500 placeholder:text-white rounded w-[10vw] p-2"  placeholder="Cidade" type="text" />
                                </div>
                                <div className="flex h-auto w-full gap-1">
                                    <input className="bg-zinc-500 placeholder:text-white rounded w-[25vw] p-2"  placeholder="Rua" type="text" />
                                    <input className="bg-zinc-500 placeholder:text-white rounded p-2 w-[5vw]" placeholder="N°" type="number" />
                                </div>
                                <div className="flex h-auto w-full">
                                    <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Complemento" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="flex center w-full">
                            <button className="bg-black rounded text-white w-[10vw] h-11 hover:scale-105 duration-200">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}