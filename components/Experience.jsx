import React, { useEffect, useState } from 'react'

import { DiReact, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillLaptopFill } from 'react-icons/bs';
import Image from "next/image"
import { sanityClient } from '../sanity';
import ExperienceCard from './ExperienceCard';
const Experience = ({ experience }) => {

    return (
        <section className="w-full mx-auto p-2 lg:p-5 mt-10  mb-10 ">
            <div className="flex items-center space-x-5">
                <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />
                <h3 className="text-3xl py-1 font-bold dark:text-white">Experience</h3>
            </div>
            <div>
                <ExperienceCard experience={experience} />
            </div>
        </section>
    )
}

export default Experience