import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header';
// import { EndH } from '../../components/endH';
import { api } from '../../services/api';
import { LogOut } from 'lucide-react';
import { Pencil } from "lucide-react";
import PedidoCard from '../../components/pedidodcard';

interface CustomerProps {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
  array: string;
}

export const PagLogado = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  // useEffect(() => {
  //   loadCustomers();
  // }, []);

  // async function loadCustomers() {
  //   try {
  //     const response = api.get("/login/token", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`
  //       }
  //     })
  //     console.log(response)  
  //     setCustomers(response.data.array);
  //   } catch (error) {
  //     console.error("Erro ao carregar os clientes", error);
  //   }
  // }

  return (
    <div className="flex flex-col gap-10">
      <Header />
      <h1 className="text-5xl font-bold ml-16">Minha Conta</h1>
      <div className="flex flex-col w-full p-10 justify-center">
        <div className='flex px-10 gap-5'>
          <div className="flex w-full  h-auto gap-3">
            <div className="flex flex-col h-auto w-30 bg-zinc-300 p-10 rounded gap-7">
              <h1 className="font-bold text-4xl">Meus Dados</h1>
              <div className="flex border-b-2 border-black justify-between items-center p-3">
                <section className="flex flex-col items-center p-5">

                  {customers.map((customer) => (
                    <article 
                    key={customer.id}
                    className="w-[40vw] bg-gray-500 rounded p-2 gap-3 relative hover:scale-105 duration-200"
                    >
                      <div className="flex justify-between">
                      <p><span className="font-medium">Email:</span> {customer.email}</p>
                      <Pencil/>   
                      </div>
                      <div className="flex justify-between">
                      <p><span className="font-medium">Senha:</span>*****************</p> 
                      <Pencil/>  
                      </div>
                      {/* <p><span className="font-medium">Tipo:</span> {customer.isAdmin ? "Admin" : "Cliente"}</p>  */}
                    </article>  
                  ))}
                </section>
              </div>
              <div className="flex flex-col size-10 hover:scale-105">
                <button 
                className="text-left" 
                // onClick=""
                >Sair<LogOut/>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full w-2/4 bg-zinc-300 p-10 rounded">
            <h1 className="font-bold text-4xl">Meus Pedidos</h1>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <EndH /> */}
    </div>
  );
};
