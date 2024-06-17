import { EndH } from "../components/endH";
import { Header } from "../components/header";
import { UserRound } from "lucide-react";
import {api} from '../services/api'
import { useEffect, useState, useRef } from 'react'

interface CustomerProps{
    id: string;
    email: string;
    password: string;

}


export function UserPage(){

    const [customers, setCustomers] = useState<CustomerProps[]>([])

    useEffect(() => {
        loadCustomers();
    }, [])

    async function loadCustomers(){
        const response = await api.get("/logins")
        setCustomers(response.data);
    }

    return(
        <div>
            <Header />
            <div className="flex flex-col gap-96">
                {customers.map( (customer) =>  (
                    <div className="flex justify-center items-center pt-20">
                        key={customer.id}
                       <div className="md:flex md:flex-col md:bg-zinc-300 md:p-6 md:size-auto md:rounded md:items-center md:gap-5
                                       flex flex-col bg-zinc-300 h-[60vh] w-[90vw] p-6 rounded items-center gap-5">
                           <div className="flex justify-between w-[85vw] md:w-80">
                               <h1 className="font-bold text-2xl ">Entrar na Conta</h1>
                               <UserRound className="size-16"/> 
                           </div>
                           <div className="flex flex-col gap-10 items-center">
                               <div>
                                   <h2 className="font-bold text-xl">E-mail</h2>
                                   <p><input className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" type="text" />{customer.email}</p>
                               </div>
                               <div>
                                   <h2 className="font-bold text-xl">Senha</h2>
                                   <p><input className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" type="text" />{customer.password}</p>
                               </div>
                           </div>
                           <div className="pt-12">
                               <button className=" bg-black text-white w-40 h-12 rounded text-xl">Entrar</button>
                           </div>
                           <div className="pt-12 flex justify-between w-64 mb:w-80">
                               <a className="font-medium">Esqueci minha senha</a>
                               <a href='/Signin' className="font-medium">Cadastrar</a>
                           </div>
                       </div>
                   </div>
                ))}
                <EndH />
            </div>
        </div>
    )
}

                {/* {customers.map( () =>  (
                       <div className="flex justify-center items-center pt-20">
                       <div className="md:flex md:flex-col md:bg-zinc-300 md:p-6 md:size-auto md:rounded md:items-center md:gap-5
                                       flex flex-col bg-zinc-300 h-[60vh] w-[90vw] p-6 rounded items-center gap-5">
                           <div className="flex justify-between w-[85vw] md:w-80">
                               <h1 className="font-bold text-2xl ">Entrar na Conta</h1>
                               <UserRound className="size-16"/> 
                           </div>
                           <div className="flex flex-col gap-10 items-center">
                               <div>
                                   <h2 className="font-bold text-xl">E-mail</h2>
                                   <input className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" type="text" />
                               </div>
                               <div>
                                   <h2 className="font-bold text-xl">Senha</h2>
                                   <input className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" type="text" />
                               </div>
                           </div>
                           <div className="pt-12">
                               <button className=" bg-black text-white w-40 h-12 rounded text-xl">Entrar</button>
                           </div>
                           <div className="pt-12 flex justify-between w-64 mb:w-80">
                               <a className="font-medium">Esqueci minha senha</a>
                               <a href='/Signin' className="font-medium">Cadastrar</a>
                           </div>
                       </div>
                   </div>
                ))} */}

            //     <div className="flex justify-center items-center pt-20">
            //     <div className="md:flex md:flex-col md:bg-zinc-300 md:p-6 md:size-auto md:rounded md:items-center md:gap-5
            //                     flex flex-col bg-zinc-300 h-[60vh] w-[90vw] p-6 rounded items-center gap-5">
            //         <div className="flex justify-between w-[85vw] md:w-80">
            //             <h1 className="font-bold text-2xl ">Entrar na Conta</h1>
            //             <UserRound className="size-16"/> 
            //         </div>
            //         <div className="flex flex-col gap-10 items-center">
            //             <div>
            //                 <h2 className="font-bold text-xl">E-mail</h2>
            //                 <input className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" type="text" />
            //             </div>
            //             <div>
            //                 <h2 className="font-bold text-xl">Senha</h2>
            //                 <input className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" type="text" />
            //             </div>
            //         </div>
            //         <div className="pt-12">
            //             <button className=" bg-black text-white w-40 h-12 rounded text-xl">Entrar</button>
            //         </div>
            //         <div className="pt-12 flex justify-between w-64 mb:w-80">
            //             <a className="font-medium">Esqueci minha senha</a>
            //             <a href='/Signin' className="font-medium">Cadastrar</a>
            //         </div>
            //     </div>
            // </div>