import React from 'react'
import { DiReact, DiJava, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillLaptopFill } from 'react-icons/bs';
import { FcLinux } from 'react-icons/fc';
const Skills = () => {
    return (
        <section className="  w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
            <div className="flex items-center space-x-5">
                <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />
                <h3 className="text-3xl py-1 font-bold dark:text-white">Projects</h3>
            </div>
            <div>
                <div className="grid dark:bg-transparent pt-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center p-2 lg:p-5 bg-white gap-10 w-[98%] lg:w-[80%] mt-16 mb-5 shadow-xl rounded-md mx-auto">
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64 hover:scale-110 hover:bg-gray-100/10 rounded-md p-2 lg:p-5 duration-200 cursor-pointer items-center flex-col justify-center"><DiMongodb className=" text-green-500 text-4xl " />
                        <span className="dark:text-white text-xl lg:text-2xls text-center font-semibold">Mongo DB</span></div>
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64  hover:scale-110 hover:bg-gray-100/10   p-2 lg:p-5  rounded-md duration-200 cursor-pointer  items-center flex-col justify-center"><DiNodejsSmall className=" text-blue-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl font-semibold">Node JS</span></div>
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64 hover:scale-110 hover:bg-gray-100/10  p-2 lg:p-5  rounded-md duration-200 cursor-pointer items-center flex-col justify-center"> <SiExpress className=" text-blue-500 text-4xl" />
                        <span className="dark:text-white text-xl text-center lg:text-2xl font-semibold">Express JS</span></div>
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64  hover:scale-110 hover:bg-gray-100/10   p-2 lg:p-5  rounded-md duration-200 cursor-pointer  items-center flex-col justify-center"><DiReact className=" text-teal-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl font-semibold">React</span></div>
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64  hover:scale-110 hover:bg-gray-100/10   p-2 lg:p-5  rounded-md duration-200 cursor-pointer items-center flex-col justify-center"><SiTailwindcss className=" text-blue-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl text-center font-semibold">Tailwind CSS</span></div>
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64  hover:scale-110 hover:bg-gray-100/10  p-2 lg:p-5  rounded-md duration-200 cursor-pointer items-center flex-col justify-center  w-fit"><DiJava className=" text-red-500 text-4xl mx-auto" />
                        <span className="dark:text-white text-xl lg:text-2xl text-center font-semibold">Java</span></div>
                    <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64 hover:scale-110 hover:bg-gray-100/10  p-2 lg:p-5  rounded-md duration-200 cursor-pointer items-center flex-col justify-center  w-fit"><FcLinux className=" text-red-500 text-4xl mx-auto" />
                        <span className="dark:text-white text-xl lg:text-2xl text-center font-semibold">Linux</span></div>
                </div>
            </div>
        </section>
    )
}

export default Skills