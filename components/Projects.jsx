import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {sanityClient, urlFor} from "../sanity"
import Card from './Card'
const Projects = () => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    const query = `*[_type == "project"]{
      ...,
      technologies[]->{
        title,
        icon,
        url
      }
    }`
    const data = await sanityClient.fetch(query)
     setProjects(data)
}

useEffect(() => {
  getProjects()
}, [])
  return (
    <section className="w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
      <div className="flex items-center space-x-5">
        <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />            
        <h3 className="text-3xl py-1 font-bold dark:text-white">Projects</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center place-content-center  scrollbar-hide p-1 mt-5 lg:mt-0 lg:p-5">
        {
          projects?.map(project => (
           <>
             <div className="bg-white w-[100%] lg:w-[105%] dark:bg-gradient-to-br from-blue-500 to-sky-700 snap-center hover:scale-105 cursor-pointer hover:opacity-80 duration-200 ease space-y-8 drop-shadow-xl mx-auto rounded-md py-5 px-2">
            <div className="flex items-center mx-auto w-fit space-x-5">
                <h3 className="text-3xl py-1 font-bold dark:text-white">{project?.title}</h3>
            </div>
            <p className="text-lg text-center w-[80%] mx-auto text-gray-500 dark:text-gray-100 font-medium">A weather app that shows the weather of a city. It uses the OpenWeatherMap API to fetch the weather data. It is built using React and Tailwind CSS.</p>
            {/* techstack */}
            <div className="flex flex-row  lg:space-y-0 items-center space-x-5 w-fit mx-auto 
            bg-gray-100 dark:bg-gray-900/30 shadow-md rounded-lg p-5
            ">
                {project.technologies?.map(tech => (
                    // <Image key={tech?.id} src={urlFor(tech.icon).url()} width={50} height={50} alt={tech.alt}
                    // className="rounded-full w-16 h-16 object-contain"
                    //  />
                    <div key={tech?.id}>
                      <Image src={tech?.icon && urlFor(tech?.icon).url()} alt="" width={50} height={50} className="rounded-full w-16 h-16 object-contain" />
                    </div>
                ))
                }
            </div>
            <div className="flex items-center  justify-center space-x-5 w-fit mx-auto">
                <Link href={project.linkToCode} className="text-lg  w-fit rounded-md shadow-lg px-3 py-2  bg-blue-500 text-gray-800 duration-200 active:scale-95 mx-auto text-gray-200">View Code</Link>
                <Link href={project.linkToBuild} className="text-lg bg-blue-500 text-gray-800 text-center w-fit rounded-md shadow-lg px-3 py-2 duration-200 active:scale-95 mx-auto text-gray-200">View Live</Link>
                </div>
            </div>
           </>
          ))
        }

      </div>

    </section>
  )
}

export default Projects