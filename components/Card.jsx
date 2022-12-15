import React from 'react'
import weatherapp from "../public/images/weather.png"
import Image from "next/image"
import Link from 'next/link'
import { DiReact,DiJava, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiTailwindcss, SiExpress } from 'react-icons/si'
import {TiWeatherCloudy} from "react-icons/ti"
const Card = () => {
  return (
    <div className="bg-white w-[100%] lg:w-[105%] dark:bg-gradient-to-br from-blue-500 to-sky-700 snap-center hover:scale-105 cursor-pointer hover:opacity-80 duration-200 ease space-y-8 drop-shadow-xl mx-auto rounded-md py-5 px-2">
            <div className="flex items-center mx-auto w-fit space-x-5">
                <h3 className="text-3xl py-1 font-bold dark:text-white">Weather App</h3>
            </div>
            <p className="text-lg text-center w-[80%] mx-auto text-gray-500 dark:text-gray-100 font-medium">A weather app that shows the weather of a city. It uses the OpenWeatherMap API to fetch the weather data. It is built using React and Tailwind CSS.</p>
            {/* techstack */}
            <div className="flex flex-row  lg:space-y-0 items-center space-x-5 w-fit mx-auto 
            bg-gray-100 dark:bg-gray-900/30 shadow-md rounded-lg p-5
            ">
                <div className="flex items-center space-x-2">
                    <DiReact className="text-4xl text-teal-500" />
                </div>
                <div className="flex items-center space-x-2">
                    <SiTailwindcss className="text-4xl text-blue-500" />
                </div>
                <div className="flex items-center space-x-2">
                    <TiWeatherCloudy className="text-4xl text-red-500" />
                </div>
            </div>
            <div className="flex items-center  justify-center space-x-5 w-fit mx-auto">
                <Link href="/" className="text-lg  w-fit rounded-md shadow-lg px-3 py-2  bg-blue-500 text-gray-800 duration-200 active:scale-95 mx-auto text-gray-200">View Code</Link>
                <Link href="/" className="text-lg bg-blue-500 text-gray-800 text-center w-fit rounded-md shadow-lg px-3 py-2 duration-200 active:scale-95 mx-auto text-gray-200">View Live</Link>
                </div>
            </div>

  )
}

export default Card