import React from 'react'

import {DiReact, DiMongodb, DiNodejsSmall} from 'react-icons/di'
import {SiTailwindcss, SiExpress} from 'react-icons/si'
import { BsFillLaptopFill } from 'react-icons/bs';
import Image from "next/image"
const Experience = () => {
  return (
    <section  className="w-full mx-auto p-5 mt-10  mb-10
   ">
        <div className="flex items-center space-x-5">
            <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />
            <h3 className="text-3xl py-1 font-bold dark:text-white">Experience</h3>
        </div>
        <div>
            <div className="text-center dark:bg-gradient-to-br dark:from-fuchsia-500 dark:to-blue-700 flex flex-col items-center space-y-4 drop-shadow-xl rounded-2xl my-10 p-5 bg-white w-full lg:w-[60%] mx-auto">
                <BsFillLaptopFill className="text-6xl text-white" />

                <h3 className="text-2xl py-1 dark:text-gray-200 font-bold">Engenia Technlogies</h3>
                <p className="text-lg text-gray-400 dark:text-gray-100 leading-8 text-center font-bold">
                Web Developer
            </p>
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-8 text-center w-[70%]">
                    Developing robust api&apos;s using <span className="font-bold">MERN</span> stack and integrating them with the front end dockerizing the apis.
                </p>
                <p className="text-lg text-gray-400 dark:text-gray-100 leading-8 text-center font-semibold">
                Tech Stack
            </p>
                <div className="
                flex flex-col lg:flex-row space-y-5 lg:space-y-0 flex-wrap justify-around items-center p-5 lg:space-x-5
                ">
                <div className="flex justify-between space-x-3  items-center">
                    <DiReact className=" text-teal-500 text-4xl" />
                    <span className="text-2xl dark:text-white font-bold">React</span>
                </div>
                <div className="flex space-x-3  items-center text-center">
                    <DiMongodb className=" text-green-500 text-4xl" />
                    <span className="text-2xl dark:text-white font-bold">Mongo DB</span>
                </div>
                <div className="flex space-x-3  items-center">
                    <SiExpress className=" text-blue-500 text-4xl" />
                    <span className="text-2xl dark:text-white font-bold">Express JS</span>
                </div>
                <div className="flex space-x-3 m-5  items-center">
                    <DiNodejsSmall className=" text-blue-500 text-4xl text-shadow " />
                    <span className="text-2xl dark:text-white font-bold">Node JS</span>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience