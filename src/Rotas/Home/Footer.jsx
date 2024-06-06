import Logo from '../Img/Logo.jpg'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";


const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className=''>
                <div className='md:w-1/2 space-y-8'>
                <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img className=' rounded-full w-10 inline-block items-center ' src={Logo} alt="Logo" /> <span className='text-white'>CCons</span>
                </a>
                <p className='md:w-1/2'>
                Juntos, transformamos nossa cidade em um lugar melhor para todos. Participe da campanha e faça a diferença!
                </p>
                </div>
                <br />
                <hr />
                <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                    <p>André Carlos - Xiao Dree responsible</p>
                
                <div className='flex items-center space-x-5'>
                <SlSocialInstagram className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                <SlSocialLinkedin className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                <SlSocialFacebook className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                <SlSocialGithub className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                </div>
                </div>
            </div>
        </div>
)
}

export default Footer
