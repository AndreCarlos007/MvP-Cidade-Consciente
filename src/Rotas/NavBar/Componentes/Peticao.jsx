import {motion} from 'framer-motion';
import {fadeIn} from './variants';
import PeticaoSVG from '../../../assets/PeticaoSVG.svg'
import { Link as RouterLink } from 'react-router-dom';

const Peticao = () => {
return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='forum'>
    <div id='peticoes'>
              {/* Petiçoes */}
    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='md:w-1/2'>
        <img className='' src={PeticaoSVG} alt="" />
        </motion.div>
        {/* Info de Petições */}

        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='md:w-2/5'>
        <h2 className='md:text-5xl font-bold text-black mb-5 leading-normal'>Participe da Nossa <span className='text-indigo-600'>Petição!</span></h2>
        <p className='text-gray-500 text-lg mb-7'>Estamos lançando uma petição online na nossa plataforma de denúncia de problemas locais para garantir ações mais rápidas e eficazes das autoridades. 
        Seu voto é crucial para fortalecer nossa voz e promover mudanças significativas na nossa comunidade.</p>
            <RouterLink to='/PagPeticao'>
            <button className='py-2 px-8 bg-gray-300 font-semibold text-black rounded hover:bg-indigo-600 transition-all duration-300'>
            Entrar
            </button>
            </RouterLink>
        </motion.div>
        </div>
    </div>
    <div className='md:px-14 p-4 max-w-s py-10'>
    <motion.div
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.7}}
    >
        <div className='flex flex-col items-center'>
    <h2 className='md:text-5xl text-3xl font-extrabold text-black text-center'>
        Juntos, podemos transformar nossa cidade!
    </h2>
    <p className='text-gray-500 md:w-1/3 mx-auto px-4 text-center'>Faça sua voz ser ouvida e contribua para um futuro melhor! Cada pequena ação conta.</p>
    <RouterLink to='/FormD'>
    <button className='py-2 px-8 bg-gray-300 font-semibold text-black rounded hover:bg-indigo-600 transition-all duration-300 text-center'>
        Formulário de Problemas Locais
    </button>
    </RouterLink>
</div>

    </motion.div>
    </div>
    </div>
)
}

export default Peticao
