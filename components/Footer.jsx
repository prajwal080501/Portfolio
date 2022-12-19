import React from 'react'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = ({info}) => {
    const socials = info.socials
  return (
    // modern reponsive footer tailwind css
    <footer className="bg-gray-100 dark:bg-black/20 mt-10 rounded-lg shadow-xl">

            <div className="w-full flex items-center justify-between p-5 h-1/2">
                <div className="w-fit h-fit">
                    <h1 className=" text-lg  dark:text-gray-200 lg:text-3xl leading-6 text-gray-500 font-extrabold tracking-wide uppercase">
                        Prajwal Ladkat
                    </h1>
                </div>
                <div className="w-fit h-fit  p-5 space-x-5 flex  justify-center items-center">
                {
         socials?.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noreferrer" className="hover:text-blue-60 text-xl lg:text-3xl dark:text-white duration-200 ease-linear hover:scale-110  w-fit dark:hover:text-blue-400">
            {social.title === 'Twitter' && <AiFillTwitterCircle />}
            {social.title === 'Github' && <AiFillGithub />}
            {social.title === 'Linkedin' && <AiFillLinkedin />}
          </a>
          ))
       }
                    </div>
            </div>
        <div className="max-w-7xl mx-auto py-5 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                <div className="px-5 py-2">
                    <a href="#hero" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        About
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#projects" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        Projects
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#experience" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        Experience
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#contact" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        Contact
                    </a>
                </div>
            </nav>
            <p className="mt-8 text-center text-base text-gray-400 font-semibold">
                &copy; 
               <span> {
                    // current year 
                    new Date().getFullYear()
                    
                } </span>
                 {info.name}, All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer