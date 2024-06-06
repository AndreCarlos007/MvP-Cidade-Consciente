import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner from './Banner'
import Noticias from '../NavBar/Componentes/Noticias'
import Forum from '../NavBar/Componentes/Forum'
import Footer from './Footer'
import Peticao from '../NavBar/Componentes/Peticao'

function Home() {
    return (
<>
<div className='bg-gray-100'>
        <NavBar/>
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ' id='home'>
        <Banner titulo='Cidade Consciente: Você por uma cidade melhor!' subtitulo='Nosso compromisso é transformar pequenas ações em grandes mudanças, promovendo uma comunidade melhor para todos. Junte-se a nós nessa jornada rumo a uma cidade mais consciente e participativa!
Acreditamos que cada morador tem um papel essencial na construção de um ambiente mais seguro, limpo e acolhedor. Ao relatar problemas e colaborar ativamente, estamos criando uma rede de solidariedade e ação comunitária.
Vamos juntos fazer a diferença e construir um futuro onde nossas vozes são ouvidas e respeitadas. Cada contribuição conta, e com a sua ajuda, podemos alcançar grandes realizações.
Participe e faça parte dessa transformação. Nossa cidade precisa de você!' btn1={'Iniciar'} btn2={'Registre-se'}/>
    </div>
        <Noticias/>
        <hr />
        <Forum/>
        <hr />
        <Peticao/>
        <Footer/>
        </div>
</>
)
}

export default Home
