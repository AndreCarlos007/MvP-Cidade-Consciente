import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../Img/Logo.jpg'
// react icons, plataforma de icons para o react
import {FaBars, FaXmark} from "react-icons/fa6";

function NavBar () {
    const [isMenuAberto, setIsMenuAberto] = useState(false);
    const toggleMenu = () => {
        setIsMenuAberto(!isMenuAberto);
    }
    const navItems = [
        {link: 'Home', path: 'home'},
        {link: 'Noticias', path: 'noticias'},
        {link: 'Fórum', path: 'forum'},
        {link: 'Petições', path: 'peticoes'},
    ]
    return (
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-black border-b fixed top-0 right-0 left-0 '>
            <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img className='w-10 inline-block items-center rounded-full' src={Logo} alt="Logo" /> <span>CCons</span>
                    </a>
                    {/* Aqui eu mostro a nsvItems usando .map */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>
                            {link}</Link> )
                        }
                    </ul>
                </div>


                {/* Menu da navBar para o mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuAberto ? (<FaXmark className='w-6 h-6 text-black'/>) : (<FaBars className='w-6 h-6 text-black'/>)
                        }
                    </button>
                </div>
            </div>
        </nav>
            
            {/* Item da Navbar pro mobile */}
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-gray-400 ${isMenuAberto ? "block fixed top-4 right-0 left-0" : "hidden"}`}>
            {
                navItems.map(({link, path}) => <Link activeClass='active' spy={true} smooth={true} offset={-80} onClick={toggleMenu} key={link} to={path} className='block text-white hover:text-gray-600'>
                {link}</Link> )
            }
        </div>
        </>
    )
}

export default NavBar
