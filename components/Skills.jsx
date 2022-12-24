import React, { useEffect, useState } from 'react'
import { sanityClient } from '../sanity';
import { motion } from 'framer-motion';
import Title from './Title';
import SkillCard from './SkillCard';

const Skills = ({title}) => {
    const [skills, setSkills] = useState([])
    const getSkills = () => {

        const query = `*[_type == "skill"]`
        sanityClient.fetch(query).then((res) => {
            setSkills(res)
        }
        );
    }

    useEffect(() => {
        getSkills()
    })
    return (
        <section id="skills" className="  w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
            <Title title={title} />
            <div>
                <SkillCard skills={skills}/>
            </div>
        </section>
    )
}

export default Skills