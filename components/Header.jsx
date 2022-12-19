import React from 'react'
import {motion} from 'framer-motion'
import {HiDownload} from "react-icons/hi"
import { BsFillMoonStarsFill } from './../node_modules/react-icons/bs/index.esm';
const Header = ({darkMode, setDarkMode}) => {
    return (
        <motion.nav 
        initial={{y: -250}}
        animate={{y: -10}}
        transition={{delay: 0.2, type: 'spring', stiffness: 520, duration:1 }}
        className="py-10 z-10 px-3  flex sticky top-0 
         items-center justify-between">
            <h1 className='text-3xl w-fit lg:text-4xl font-extrabold font-indie dark:text-white'>Portfolio</h1>
            <ul className="flex items-center space-x-5">
                <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:text-white active:scale-75 duration-200 animate-pulse text-2xl" />
                </li>
                <l1 className="flex space-x-4 items-center">
                    <a file download className=" bg-gradient-to-r from-fuchsia-500 to-blue-600 
                    text-white px-1 lg:px-4 py-1 border-none rounded-md text-transparent hover:opacity-80 bg-clip-text font-bold text-xl active:scale-95 duration-200">Resume</a>
                    <HiDownload className="cursor-pointer active:scale-75 dark:text-white text-black duration-200 text-2xl animate-bounce" />
                </l1>

            </ul>
        </motion.nav>
    )
}

export default Header