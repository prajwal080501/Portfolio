import React from 'react'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image"
import profileImage from "../public/profile.png";
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <>
    <div className="text-center p-10">
    <motion.h1
        initial={{ y:-100, scale:1.3 }}
        animate={{y:0, scale:1}}
        transition={{ delay: 0.5, duration: 1 }}
     className="dark:text-white text-black text-4xl lg:text-6xl font-extrabold">
	Prajwal Ladkat
</motion.h1>
        <h3 className="text-3xl py-3  bg-gradient-to-br from-pink-600 to-fuchsia-400 text-transparent bg-clip-text font-extrabold">Web Developer</h3>
        <p className='text-lg py-5 max-w-xl mx-auto leading-8 font-semibold text-gray-800 dark:text-white '>
            Web Developer with 2+ years of experience in building and maintaining websites and web applications.
        </p>
    </div>
    <motion.div 
    initial={{x: -250}}
    animate={{x: 0}}
    transition={{delay: 0.5, type: 'spring', stiffness: 120, duration:1 }}
    className='text-3xl sticky mr-8 left-0  flex flex-col gap-10'>
        <AiFillGithub className="cursor-pointer hover:scale-125 duration-200 hover:text-teal-500 dark:text-white" />
        <AiFillLinkedin className="cursor-pointer hover:scale-125 duration-200 hover:text-teal-500 dark:text-white" />
        <AiFillTwitterCircle className="cursor-pointer hover:scale-125 duration-200 hover:text-teal-500 dark:text-white" />
    </motion.div>
    <div className="relative bg-gradient-to-b w-80 h-80 rounded-full from-blue-600/90 bg- overflow-y-hidden to-fuchsia-600 flex items-center justify-center mx-auto -mt-44
    ">
        <Image src={profileImage} className=" object-contain overflow-hidden" alt="profile" layout="fill" />
    </div>
    </>
  )
}

export default Hero