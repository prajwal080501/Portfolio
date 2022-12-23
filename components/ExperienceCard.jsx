import React from 'react'
import { DiReact, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillLaptopFill } from 'react-icons/bs';
import { urlFor } from '../sanity';
import Image from 'next/image';
import {motion} from 'framer-motion'
const ExperienceCard = ({ experience }) => {
    return (
        <div>
            {
                experience?.map((exp) => (
                    <div 
                    key={exp._id} className="text-center bg-gradient-to-br from-fuchsia-500 to-blue-700 flex flex-col items-center space-y-4 shadow-2xl rounded-2xl my-10 p-5 bg-white w-full lg:w-[60%] mx-auto ">
                        <Image src={urlFor(exp.companyImage).url()} width={100} alt="image" height={100} className="rounded-full" />

                        <h3 className="text-2xl py-1 text-gray-100 dark:text-gray-200 font-bold">{exp.company}</h3>
                        {/* dates */}
                        <div className="flex items-center space-x-5">
                            <div className="flex  rounded-lg items-center space-x-2">
                                <p className="text-lg text-gray-100 dark:text-gray-100 leading-8 text-center font-semibold">
                                    {exp.dateStarted}
                                </p>
                                <p className="text-lg text-gray-100 dark:text-gray-100 leading-8 text-center font-semibold">
                                    -
                                </p>
                                <p className="text-lg text-gray-100 dark:text-gray-100 leading-8 text-center font-semibold">
                                    {exp.dateEnded}
                                </p>
                            </div>
                            </div>
                        <p className="text-lg text-gray-200 dark:text-gray-100 leading-8 text-center font-bold">
                            {exp.role}
                        </p>
                        <p className="text-lg text-gray-100 dark:text-gray-200 leading-8 text-center w-[90%]">
                            {exp.description}
                        </p>
                        <p className="text-lg text-gray-100 dark:text-gray-100 leading-8 text-center font-semibold">
                            Tech Stack
                        </p>
                        <div className="
            flex flex-col lg:flex-row space-y-5 lg:space-y-0 flex-wrap justify-around items-center p-5 lg:space-x-5
            ">
                {exp.technologies.map(tech => (
                            <div key={tech.id} className="flex justify-between space-x-3  items-center">
                                <Image src={urlFor(tech.icon).url()} alt="image" width={50} height={50}
                                className="rounded-full w-14 h-14 object-contain bg-black/20 px-2"
                                 />
                                <p className="text-lg text-white dark:text-gray-200 leading-8 text-center font-semibold">
                                    {tech.title}
                                </p>
                            </div>
                ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ExperienceCard