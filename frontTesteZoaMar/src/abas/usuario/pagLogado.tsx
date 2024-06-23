import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header';
// import { EndH } from '../../components/endH';
import { api } from '../../services/api';

interface CustomerProps {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export const PagLogado = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      const response = await api.post('/login');  
      setCustomers(response.data);
    } catch (error) {
      console.error("Erro ao carregar os clientes", error);
    }
  }

  return (
    <div>
      <Header />
      <section className="flex items-center p-5">
        {customers.map((customer) => (
          <article 
            key={customer.id}
            className="w-[50vw] bg-gray-500 rounded p-2 relative hover:scale-105 duration-200"
          >
            <p><span className="font-medium">Email:</span> {customer.email}</p>
            <p><span className="font-medium">Senha:</span> {customer.password}</p> 
            <p><span className="font-medium">Tipo:</span> {customer.isAdmin ? "Admin" : "Cliente"}</p> 
          </article>  
        ))}
      </section>
      {/* <EndH /> */}
    </div>
  );
};