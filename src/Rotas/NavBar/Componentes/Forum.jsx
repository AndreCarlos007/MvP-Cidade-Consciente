import ForumSVG from '../../../assets/ForumSVG.svg'
import {motion} from 'framer-motion';
import {fadeIn} from './variants';
import { Link as RouterLink } from 'react-router-dom';


const ForumEpeticao = () => {
  return (
    <>
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='forum'>
        {/* Fórum */}
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='md:w-1/2'>
          <img className='w-3/4' src={ForumSVG} alt="" />
        </motion.div>
        {/* Info do Forum */}
        
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='md:w-2/5'>
          <h2 className='md:text-5xl font-bold text-black mb-5 leading-normal'>Participe do Nosso <span className='text-indigo-600'>Fórum Online!</span></h2>
          <p className='text-gray-500 text-lg mb-7'>Estamos entusiasmados em anunciar o lançamento do fórum online na nossa plataforma de denúncia de problemas locais. 
            Agora, além de relatar problemas, você pode discutir soluções, compartilhar ideias e colaborar diretamente com outros moradores e autoridades.</p>
            <RouterLink to="/PagForum">
            <button className='py-2 px-8 bg-gray-300 font-semibold text-black rounded hover:bg-indigo-600 transition-all duration-300'>
              Entrar
            </button>
            </RouterLink>
        </motion.div>
      </div>
      <br />

    </div>
  
    </>
  )
}

export default ForumEpeticao

