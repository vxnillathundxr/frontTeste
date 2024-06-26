import React, { useState, useEffect } from 'react';
import { EndH } from "../../components/endH";
import { Header } from "../../components/header";
import { useNavigate } from 'react-router-dom';
import { UserRound } from "lucide-react";
import { api } from '../../services/api';


export const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    // const [id, setId ] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const response = await api.post('/login',
        {
        email: email, 
        password: password,
        isAdmin: isAdmin
    }, {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        );
        if (!response.data) return;
        localStorage.setItem("token",response.data.accessToken)
          navigate('/pagLogado');

        // if(response.data.isAdmin === true) return;
        // localStorage.setItem("token",response.data.accessToken)
        // navigate('/adm');
        
      } catch (error) {
        alert('Invalid email or password');
      }
    };

    return(
        <div>
            <Header />
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-96">
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
                                        <input 
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white" 
                                        required
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Senha</h2>
                                        <input 
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-zinc-500 rounded w-[85vw] md:w-80 p-2 text-white"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="pt-12">
                                    <button 
                                    type="submit"
                                    className=" bg-black text-white w-40 h-12 rounded text-xl"
                                    >Entrar</button>
                                </div>
                                
                                <div className="pt-12 flex justify-between w-64 mb:w-80">
                                    <a className="font-medium">Esqueci minha senha</a>
                                    <a href='/Signin' className="font-medium">Cadastrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <EndH />
        </div>
    )
}