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
        <section id="projects" className="w-full mx-auto p-3 lg:p-5 mt-10 mb-10">
            <Title title={title}/>
            <BlogCard blogs={blogs}/>
        </section>
    )
}

export default Blogs