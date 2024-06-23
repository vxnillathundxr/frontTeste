import { Pencil } from "lucide-react";

export function SignInPage(){
    return(
            <div className="flex flex-col w-full h-screen items-center gap-9 justify-center pb-40">
                <h1 className="text-5xl font-bold">Minha Conta</h1>

                <div className="flex w-full items- justify-center h-3/4 gap-10">
                    <div className="flex flex-col h-full w-1/4 bg-zinc-300 p-10 rounded gap-24">
                        <h1 className="font-bold text-4xl">Meus Dados</h1>
                        <div className="flex flex-col text-3xl font-medium gap-16">
                            <div className="flex border-b-2 border-black justify-between items-center p-3">
                                <p>Nome</p>
                                <Pencil/>   
                            </div>
                            <div className="flex border-b-2 border-black justify-between items-center p-3">
                                <p>E-mail</p>
                                <Pencil/>
                            </div>
                            {/* <div className="flex border-b-2 border-black justify-between items-center p-3">
                                <p>Telefone</p>
                                <Pencil/>
                            </div> */}
                            <div className="flex border-b-2 border-black justify-between items-center p-3">
                                <a href="">Alterar Senha</a>
                                <Pencil/>
                            </div>   
                        </div>
                    </div>
                    <div className="flex h-full w-2/4 bg-zinc-300 p-10 rounded">
                        <h1 className="font-bold text-4xl">Meus Pedidos</h1>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
    )

}