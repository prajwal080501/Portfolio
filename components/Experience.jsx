import React from 'react'
import { sanityClient } from '../sanity';
import ExperienceCard from './ExperienceCard';
import Title from './Title';
const Experience = ({ experience, title }) => {

    return (
        <section id="experience" className="w-full mx-auto p-2 lg:p-5 mt-10  mb-10 ">
            <Title title={title} />
            <div>
                <ExperienceCard experience={experience} />
            </div>
        </section>
    )
}

export default Experience