import React from 'react'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image"
import profileImage from "../public/profile.png";
import {motion} from "framer-motion"
import { urlFor } from '../sanity';
import { useEffect } from 'react';
const Hero = ({info}) => {
  const socials = info.socials;
  return (
    <>
    <div className="text-center p-0 md:p-5 lg:p-10">
    <motion.h1
        initial={{ opacity:0, scale:0.5 }}
        animate={{opacity:1, scale:1}}
        transition={{  duration: 1 }}
     className="dark:text-white text-black text-4xl lg:text-6xl w-full font-extrabold">
	{info.name}
</motion.h1>
        <h3 className="text-3xl py-3  bg-gradient-to-br from-pink-600 to-fuchsia-400 text-transparent bg-clip-text font-extrabold">{info.role}</h3>
        <p className='text-base py-5 max-w-xl mx-auto leading-8 font-semibold text-gray-800 dark:text-white '>
            {info.backgroundInformation}
        </p>
    </div>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay: 0.5, type: 'spring', stiffness: 120, duration:1 }}
    className='text-3xl mr-8 left-0 pl-5 flex flex-col gap-10'>
       {
         socials?.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noreferrer" className="hover:text-blue-60 dark:text-white duration-200 ease-linear hover:scale-110  w-fit dark:hover:text-blue-400">
            {social.title === 'Twitter' && <AiFillTwitterCircle />}
            {social.title === 'Github' && <AiFillGithub />}
            {social.title === 'Linkedin' && <AiFillLinkedin />}
          </a>
          ))
       }
    </motion.div>
    <motion.div
    initial={{y:-100}}
    animate={{y: 0, rotate: 360}}
    transition={{ type: 'spring', stiffness: 120, duration:1 }}
     className="relative bg-gradient-to-b w-52 h-52 lg:w-80 lg:h-80 rounded-full from-blue-600/90 bg- overflow-y-hidden to-fuchsia-600 flex items-center justify-center mx-auto -mt-44
    ">
        <Image src={profileImage} className=" object-contain overflow-hidden" alt="profile" layout="fill" />
    </motion.div>
    </>
  )
}

export default Hero