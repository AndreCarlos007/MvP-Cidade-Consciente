import React from 'react'
import ImagemForm from '../Img/image.jpg'
import GoogleSVG from '../../assets/google.svg'
import { Link as RouterLink } from 'react-router-dom';

const Iniciar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
      
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Crie Sua Conta!</span>
          <span className="font-light text-gray-400 mb-8">
          Bem vindo de volta! Por favor insira seus dados.
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Senha</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Confirme sua Senha</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Lembrar senha</span>
            </div>
            <span className="font-bold text-md cursor-pointer">Esqueceu sua senha?</span>
          </div>
          <RouterLink to='/Login'
            className="w-full text-center bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black border hover:border-gray-300"
          >
            Criar Conta
          </RouterLink>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src={GoogleSVG} alt="img" className="w-6 h-6 inline mr-2" />
            Registre-se com Google
          </button>
          <div className="text-center text-gray-400">
            Ja tem Conta?
            <RouterLink to='/Login' className="font-bold text-black"> Faça o Login!</RouterLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iniciar
