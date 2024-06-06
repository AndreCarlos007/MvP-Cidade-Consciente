import CardSVG from "../../../assets/CardSVG.svg"
import Card2SVG from "../../../assets/Card2SVG.svg"
import Card3SVG from "../../../assets/Card3SVG.svg"
import {motion} from 'framer-motion';
import {fadeIn} from './variants';

const Noticias = () => {
    return (
        <div className=" my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="noticias">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div 
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
                className="lg:w-1/4">
                    <h3 className="text-3x1 text-black font-bold lg:w-1/2 mb-3">Boletim da Cidade: Melhoria Notável na Comunidade!</h3>
                    <p className="text-base text-gray-500">A cidade está se transformando! Desde o lançamento do site, moradores têm relatado problemas diretamente às autoridades, resultando em ações rápidas e eficazes.
                        Ruas mais limpas, iluminação pública funcionando e espaços comunitários revitalizados são apenas alguns dos benefícios já visíveis</p>
                </motion.div>
                {/* fabricar os cards */}
                <div
                className="w-full lg:w-3/4 ">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] cursor-pointer h-96 shadow-3x1 p8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300">
                        <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        >
                            <img className='w-56' src={CardSVG} />
                            <h5 className="text-2x1 font-semibold text-black px-5 text-center mt-5"></h5>
                        </motion.div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] cursor-pointer h-96 shadow-3x1 p8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 md:mt-16">
                        <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        >
                            <img className="w-56" src={Card2SVG} />
                            <h5 className="text-2x1 font-semibold text-black px-5 text-center mt-5"></h5>
                        </motion.div>
                </div>
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] cursor-pointer h-96 shadow-3x1 p8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300">
                        <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        >
                            <img className="w-56" src={Card3SVG} />
                            <h5 className="text-2x1 font-semibold text-black px-5 text-center mt-5"></h5>
                        </motion.div>
                        </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Noticias
