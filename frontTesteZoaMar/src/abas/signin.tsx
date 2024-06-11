import { EndH } from "../components/endH"
import { Header } from "../components/header"

export function SignIn(){
    return(
        <div>
            <Header/>
            <div className=" flex flex-col w-full justify-center items-center py-8">
                <div className="w-auto flex flex-col bg-zinc-300 items-center justify-center p-4 rounded ">
                    <div className="text-4xl items-start py-3 font-bold">
                        <h1>CADASTRAR</h1>
                    </div>
                    <div className="flex flex-col h-auto w-full justify-center p-5 text-white">
                        <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Nome" type="text" />
                        </div>
                        <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="E-Mail" type="text" />
                        </div>
                        <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Telefone" type="number" />
                        </div>
                        <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Senha" type="text" />
                        </div>
                        <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Confirmar Senha" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-32 items-center">
                        <div className=" flex bg-black text-white p-3 rounded w-24 h-10 items-center justify-center">
                            <button>CRIAR</button>
                        </div>
                        <div className="flex gap-2">
                            <a>Já tem conta? </a>
                            <a href='/User' > Clique aqui para logar</a>
                        </div>
                    </div>
                </div>
            </div>
            <EndH />
        </div>
    )

}