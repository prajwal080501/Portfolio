import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
const BlogCard = ({blogs}) => {
  return (
    <div
    className=" mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center place-content-center scrollbar-hide p-1 mt-5 lg:mt-0 lg:p-5">
    {
        // display recent 3 blogs
        blogs.slice(0,3).map((blog) => (
            <Link href={`https://prajwalladkat.hashnode.dev/${blog.slug}`} key={blog._id} className=" bg-black/10 hover:scale-105 hover:opacity-80 duration-200 ease-linear active:scale-95 dark:bg-black/40 w-[100%] h-fit lg:w-fit cursor-pointer duration-200 ease space-y-5 drop-shadow-xl mx-auto  rounded-lg px-2 py-2">
                <img src={blog.coverImage} alt="image" className="w-fullrounded-md shaow-sm mx-auto" />
                <p className="text-2xl px-2 text-white font-bold pb-5">{blog.title}</p>
                {/* <p className="text-lg text-white">{blog.brief}</p> */}
                {/* date and author name */}
                {/* display brief */}
                <p className="text-lg text-gray-400 tracking-wide px-2">{blog.brief}</p>
                <div className="flex items-center justify-between px-2">
                    <p className="text-sm text-gray-300">{blog.dateAdded.toLocaleString().slice(0, 10)}</p>
                    <p className="text-sm text-gray-300 font-bold leading-2">Prajwal Ladkat</p>
                </div>
            </Link>
        ))

    }
</div>
  )
}

export default BlogCard