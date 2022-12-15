import React from 'react'

import Card from './Card'
const Projects = () => {
  return (
    <section className="w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
      <div className="flex items-center space-x-5">
        <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />            
        <h3 className="text-3xl py-1 font-bold dark:text-white">Projects</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  scrollbar-hide p-1 mt-5 lg:mt-0 lg:p-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </section>
  )
}

export default Projects