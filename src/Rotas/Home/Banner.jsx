import React from 'react';
import MySVG from '../../assets/MySVG.svg';
import {motion} from 'framer-motion';
import {fadeIn} from '../NavBar/Componentes/variants';
import { Link as RouterLink } from 'react-router-dom';

const Banner = ({ titulo, subtitulo, btn1, btn2}) => {
    return (
        <div className='gradientBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
            {/* fazer o texto do banner da pagina bem aqui */}
            <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='md:w-3/5'>
                <h2 className='md:text-7x1 text-4xl font-bold text-black mb-6 leading-relaxed'>{titulo}</h2>
                <p className='text-black text-2x1 mb-8'>{subtitulo}</p>
                    <div className='space-x-4'>
                    <RouterLink to='/Login' className='space-x-5 space-y-4'>
                    <button className='py-2 px-8 bg-gray-300 font-semibold text-black rounded hover:bg-indigo-600 transition-all duration-300'>{btn1}</button>
                    </RouterLink>
                    <RouterLink to='/Cadastro' className='space-x-6 space-y-4'>
                    <button className='py-2 px-8 bg-gray-300 font-semibold text-black rounded hover:bg-indigo-600 transition-all duration-300'>{btn2}</button>
                    </RouterLink>
                    </div>
            </motion.div>
            {/* Imagem do Banner */}
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            >
            <img src={MySVG} alt="" className='' />
            </motion.div>
        </div>
    </div>
)
}

export default Banner
