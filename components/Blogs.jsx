import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {motion} from 'framer-motion';
import Title from './Title';
import BlogCard from './BlogCard';
const Blogs = ({title}) => {
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
        <>
        <section id="blogs" className="relative w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
            <Title title={title}/>
            <BlogCard blogs={blogs}/>
            <div className='hidden lg:inline-flex absolute w-full h-40 item-end justify-center bg-gradient-to-t from-black via-black-100/90 to-transparent bottom-0 z-20'>
                <Link href="https://prajwalladkat.hashnode.dev/" target="_blank">
                    <motion.button 
                    layout style={{width: 'fit-content'}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className=" text-black bg-white font-bold text-lg px-5 py-2 rounded-lg mt-16 mx-auto">View more blogs</motion.button>
                </Link>
            </div>
        </section>

        </>
    )
}

export default Blogs