import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    //  fetch blogs from hashnode
    const getBlogs = async () => {
        const res = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                {
                    user(username: "prajwalladkat0805") {
                        publication {
                          posts(page: 0) {
                            title
                            brief
                            slug
                            coverImage
                            _id
                            dateAdded
                          }
                        }
                      }
                }
                `
            })
        }).then(res =>
            res.json().then(data => {
                setBlogs(data.data.user.publication.posts);
            }
            )
        )
    }


    // run the function only once when the component loads
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <section id="projects" className="w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
            <div className="flex items-center space-x-5">
                <div className=" w-10 h-2 bg-gradient-to-br from-pink-600 to-fuchsia-400" />
                <h3 className="text-3xl py-1 font-bold dark:text-white">Blogs</h3>
            </div>
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center place-content-center scrollbar-hide p-1 mt-5 lg:mt-0 lg:p-5">
                {
                    blogs.map(blog => (
                        <Link href={`https://prajwalladkat.hashnode.dev/${blog.slug}`} key={blog._id} className=" bg-black/10 hover:scale-105 hover:opacity-80 duration-200 ease-linear active:scale-95 dark:bg-black/40 w-[100%] h-fit lg:w-fit cursor-pointer duration-200 ease space-y-8 drop-shadow-xl mx-auto  rounded-lg px-2 py-3">
                            <img src={blog.coverImage} alt="image" className="w-fullrounded-md shaow-sm mx-auto" />
                            <p className="text-2xl px-2 text-white font-bold pb-5">{blog.title}</p>
                            {/* <p className="text-lg text-white">{blog.brief}</p> */}
                            {/* date and author name */}
                            <div className="flex items-center justify-between px-2">
                                <p className="text-sm text-gray-300">{blog.dateAdded.toLocaleString().slice(0, 10)}</p>
                                <p className="text-sm text-gray-300">Prajwal Ladkat</p>
                            </div>
                        </Link>
                    ))

                }
            </div>

        </section>
    )
}

export default Blogs