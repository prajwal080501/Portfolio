import React from 'react'
import { DiReact,DiJava, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillLaptopFill } from 'react-icons/bs';
import {FcLinux} from 'react-icons/fc';
const Skills = () => {
    return (
        <section className=" lg:w-[100%] pb-8 mx-auto p-5 mt-10 mb-10
   ">
            <div className="flex items-center space-x-5">
            <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />                <h3 className="text-3xl py-1 font-bold dark:text-white">Skills</h3>

            </div>
            <div>
                <div className="grid dark:bg-black/30 pt-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center p-5 bg-white gap-10 w-[100%] lg:w-[80%] mt-16 mb-5 shadow-xl rounded-md mx-auto">
                    <div className="flex hover:scale-110 hover:bg-gray-100/10 rounded-md p-5 duration-200 cursor-pointer items-center flex-col justify-center"><DiMongodb className=" text-green-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xls font-semibold">Mongo DB</span></div>
                    <div className="flex hover:scale-110 hover:bg-gray-100/10  p-5 rounded-md duration-200 cursor-pointer  items-center flex-col justify-center"><DiNodejsSmall className=" text-blue-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl font-semibold">Node JS</span></div>
                    <div className="flex hover:scale-110 hover:bg-gray-100/10  p-5 rounded-md duration-200 cursor-pointer items-center flex-col justify-center"> <SiExpress className=" text-blue-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl font-semibold">Express JS</span></div>
                    <div className="flex hover:scale-110 hover:bg-gray-100/10  p-5 rounded-md duration-200 cursor-pointer  items-center flex-col justify-center"><DiReact className=" text-teal-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl font-semibold">React</span></div>
                    <div className="flex hover:scale-110 hover:bg-gray-100/10  p-5 rounded-md duration-200 cursor-pointer items-center flex-col justify-center"><SiTailwindcss className=" text-blue-500 text-4xl" />
                        <span className="dark:text-white text-xl lg:text-2xl text-center font-semibold">Tailwind CSS</span></div>
                        <div className="flex hover:scale-110 hover:bg-gray-100/10  p-5 rounded-md duration-200 cursor-pointer items-center flex-col justify-center  w-fit"><DiJava className=" text-red-500 text-4xl mx-auto" />
                        <span className="dark:text-white text-xl lg:text-2xl text-center font-semibold">Java</span></div>
                        <div className="flex hover:scale-110 hover:bg-gray-100/10  p-5 rounded-md duration-200 cursor-pointer items-center flex-col justify-center  w-fit"><FcLinux className=" text-red-500 text-4xl mx-auto" />
                        <span className="dark:text-white text-xl lg:text-2xl text-center font-semibold">Linux</span></div>
                </div>
            </div>
        </section>
    )
}

export default Skills