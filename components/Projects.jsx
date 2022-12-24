import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { sanityClient, urlFor } from "../sanity"
import {motion} from 'framer-motion'
import Card from './Card'
import Title from './Title'
const Projects = ({title}) => {
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
    <section id="projects" className="w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
       <Title title={title}/>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center place-content-center  scrollbar-hide p-1 mt-5 lg:mt-0 lg:p-5">
        {
          projects?.map(project => (
            <>
              <motion.div 
              initial={{opacity:0, y: -100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5}}
              viewportBoxVisible={true}
              className="bg-white w-[100%] lg:w-[105%] dark:bg-gradient-to-br from-indigo-500 to-indigo-700 snap-center  cursor-pointer duration-200 ease space-y-8 drop-shadow-xl mx-auto rounded-md py-5 px-2">
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
                  <Link href={project.linkToCode} className="text-lg  w-fit rounded-md shadow-lg px-3 py-2 bg-white text-black duration-200 active:scale-95 mx-auto hover:scale-105 hover:text-blue-500">View Code</Link>
                  <Link href={project.linkToBuild} className="text-lg bg-white text-black font-medium  text-center w-fit rounded-md shadow-lg px-3 py-2 duration-200 active:scale-95 mx-auto hover:text-blue-500 hover:scale-110">View Live</Link>
                </div>
              </motion.div>
            </>
          ))
        }

      </div>

    </section>
  )
}

export default Projects