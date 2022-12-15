import React from 'react'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    // modern reponsive footer tailwind css
    <footer className="bg-gray-100 dark:bg-black/20 mt-10 rounded-lg shadow-xl">
        {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                    <p className="text-3xl leading-6 text-gray-500 font-extrabold tracking-wide uppercase">
                        Prajwal Ladkat
                    </p>
                   
                </div>
                </div>
            </div> */}
            <div className="w-full flex items-center justify-between p-5 h-1/2">
                <div className="w-fit h-fit">
                    <h1 className=" text-lg  dark:text-gray-200 lg:text-3xl leading-6 text-gray-500 font-extrabold tracking-wide uppercase">
                        Prajwal Ladkat
                    </h1>
                </div>
                <div className="w-fit h-fit  p-5 space-x-5 flex  justify-center items-center">
                    <a href="https://twitter.com/PrajwalLadkat" className="text-3xl dark:text-gray-300 text-gray-500 hover:text-gray-900">
                        <AiFillTwitterCircle />
                    </a>
                    <a href="#" className="text-3xl dark:text-gray-300 text-gray-500 hover:text-gray-900">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/prajwal-ladkat-5b1b1b1b3/" className="text-3xl dark:text-gray-300 text-gray-500 hover:text-gray-900">
                        <AiFillLinkedin />
                    </a>
                    </div>
            </div>
        <div className="max-w-7xl mx-auto py-5 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                <div className="px-5 py-2">
                    <a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        About
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        Projects
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
                        Experience
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900">
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
                 Prajwal Ladkat, All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer