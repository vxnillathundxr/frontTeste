import { useEffect, useState, useRef, FormEvent} from 'react'

import { EndH } from "../components/endH"
import { Header } from "../components/header"
import { api } from '../services/api'

interface CustomerProps{
    id: string;
    email: string;
    password: string
}

export function SignIn(){

    const [customers, setCustomers] = useState<CustomerProps[]>([])
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    

    useEffect(() => {
        loadCustomers();
    }, [])

    async function loadCustomers() {
        const response = await api.get("/logins")        
        setCustomers(response.data);
        // console.log(response.data)
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        if(!emailRef.current?.value || !passwordRef.current?.value) return;

        const response = await api.post("/postLogin", {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            isAdmin: false
        })
        console.log(response.data)

        // setCustomers(allCustomers => [...allCustomers, response.data])
        // console.log(response.data);

        // console.log(emailRef.current?.value)
        // console.log(passwordRef.current?.value)
        
    }
        // async function handleDelete(id: string){
        //     try{
        //         await api.delete('/logins',{
        //             params:{
        //                 id: id,
        //             }
        //         })
        //     }catch(err){
        //         console.log(err);
        //     }
        //     // alert(id);
        // }



    return(
        <div>
            <Header/>
            <div className=" flex flex-col w-full justify-center items-center py-8">
                <div className="w-auto flex flex-col bg-zinc-300 items-center justify-center p-4 rounded ">
                    <div className="text-4xl items-start py-3 font-bold">
                        <h1>CADASTRAR</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col h-auto w-full justify-center p-5 text-white">
                            {/* <div className="flex h-auto w-full justify-center p-5">
                                <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Nome" type="text" />
                            </div> */}
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
                            <div className="flex items-center justify-center">
                                <input
                                type="submit"
                                value="Cadastrar"
                                className="flex bg-black text-white p-2 rounded w-24 h-10 items-center justify-center cursor-pointer hover:scale-110 duration-100"
                                />
                            </div>
                            {/* <div className="flex h-auto w-full justify-center p-5">
                                <input className="bg-zinc-500 placeholder:text-white rounded w-96 p-2"  placeholder="Confirmar Senha" type="text" />
                            </div> */}
                        </div>
                    </form>
                            
                        {/* {customers.map((customer) => (
                            <article
                            key={customer.id}
                            >
                                <button 
                                className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg"
                                onClick={() => handleDelete(customer.id) }
                                >

                                </button>
                            </article>
                        ))} */}
                    <div className="flex flex-col gap-32 items-center">
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