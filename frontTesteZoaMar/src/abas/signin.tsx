import { EndH } from "../components/endH"
import { Header } from "../components/header"
import { api } from '../services/api'
import { useEffect, useState, useRef, FormEvent } from 'react'

interface CustomerProps{
    id: string;
    email: string;
    password: string;
    
}

export function SignIn(){
    
    const [customers, setCustomers] = useState<CustomerProps[]>([])
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        loadCustomers();
    }, [])
    
    async function loadCustomers(){
        const response = await api.get("/logins")
        setCustomers(response.data);
    }
    
    async function handleSubmit(event: FormEvent){
        event.preventDefault();
    
    if(!emailRef.current?.value || passwordRef.current?.value) return;
    
    const response = await api.post("/login", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value

    })
    console.log(response.data);
    
        // console.log(emailRef.current?.value)
        // console.log(passwordRef.current?.value)
    }
    

    return(
        <div>
            <Header/>
            <div className=" flex flex-col w-full justify-center items-center py-8">
                <div className="w-auto flex flex-col bg-zinc-300 items-center justify-center p-4 rounded ">
                    <div className="text-4xl items-start py-3 font-bold">
                        <h1>CADASTRAR</h1>
                    </div>
                    <div className="flex flex-col h-auto w-full justify-center p-5 text-white">
                        {/* <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Nome" type="text" />
                        </div> */}
                        <form onSubmit={handleSubmit}>
                            <div className="flex h-auto w-full justify-center p-5">
                                <input 
                                className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  
                                placeholder="E-Mail" 
                                type="text" 
                                ref={emailRef}
                                />
                            </div>
                            {/* <div className="flex h-auto w-full justify-center p-5">
                                <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Telefone" type="number" />
                            </div> */}
                            <div className="flex h-auto w-full justify-center p-5">
                                <input 
                                className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  
                                placeholder="Senha" 
                                type="text" 
                                ref={passwordRef}
                                />
                            </div>
                            <div className="flex h-auto w-full justify-center p-5">
                                <input 
                                type="submit"
                                value="Cadastrar"
                                className="cursor-pointer w-96 p-2 bg-black rounded font-medium text-white" />
                            </div>
                        </form>
                        {/* <div className="flex h-auto w-full justify-center p-5">
                            <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Confirmar Senha" type="text" />
                        </div> */}
                        <div className="flex flex-col gap-32 items-center">
                            <div className="flex gap-2 text-black">
                                <a>Já tem conta? </a>
                                <a href='/User' > Clique aqui para logar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EndH />
        </div>
    )

}