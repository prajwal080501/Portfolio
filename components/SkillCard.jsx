import React from 'react'
import Image from 'next/image';
import { urlFor } from '../sanity';
const SkillCard = ({skills}) => {
  return (
    <div className="grid dark:bg-transparent pt-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center p-2 lg:p-5 bg-white gap-10 w-[98%] lg:w-[80%] mt-16 mb-5  rounded-md mx-auto">
                    {
                        skills?.map(skill => (
                            <>
                                <div className="flex  bg-gradient-to-br from-blue-500/30 to-pink-600/30 h-36 w-36 md:w-48 md:h-48 lg:w-64 lg:h-64 hover:scale-110 hover:bg-gray-100/10 rounded-md p-2 lg:p-5 duration-200 cursor-pointer items-center flex-col justify-center">
                                    <Image src={urlFor(skill.icon).url()} height={50} width={50} alt="image" className="rounded-full p-2"
                                    />
                                    <span className="dark:text-white text-xl lg:text-2xls text-center font-semibold">{skill.title}</span>
                                </div>
                            </>
                        ))
                    }

                </div>
  )
}

export default SkillCard