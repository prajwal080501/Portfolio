import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload } from "react-icons/hi"
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import resume from "../public/resume.pdf"
import DownloadLink from "react-download-link";

import 'react-toastify/dist/ReactToastify.css';
const Header = ({ darkMode, setDarkMode }) => {
    const handleClick = () => {
        fetch("https://lavender-merrielle-94.tiiny.site/")
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");

                // click event
                a.href = url;
                a.setAttribute("download", "resume.pdf");
                document.body.appendChild(a);
                a.click();
                a.remove();
            });
    }
    const notify = () => toast(darkMode ? "Light Mode On" : "Dark Mode On",
        {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkMode ? "light" : "dark",
        });

    return (
        <motion.nav
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 520, duration: 1 }}
            className="py-10 z-10 px-3  flex sticky top-0 
         items-center justify-between">
            <h1 className='text-3xl w-fit lg:text-4xl font-extrabold font-indie dark:text-white'>Portfolio</h1>
            <ul className="flex items-center space-x-5">
               
                <l1 className="flex space-x-4 items-center">
                <a href="./resume.pdf" download class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span class="relative text-white">Resume</span>
                </a>
                </l1>

            </ul>
        </motion.nav>
    )
}

export default Header