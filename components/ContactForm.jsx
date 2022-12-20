import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <div id="contact" className="w-[95%] lg:w-[fit] rounded-lg  bg-gradient-to-b from-violet-700 to-fuchsia-600  mb-10 ">
            
        <motion.form
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit="mailto:iamprajwalladkat@gmail.com"
            className="w-[95%] lg:w-fit space-y-8 mx-auto items-center p-3 lg:p-8 flex flex-col rounded-md md:flex-col md:justify-between"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className=" text-xl lg:text-4xl pt-4 mt-5 font-bold bg-gradient-to-r from-fuchsia-500 to-blue-600 bg-clip-text text-transparent text-white p-2 text-center ">Contact Me</h1>
                <p className="text-gray-200 dark:text-fuchsia-100 tracking-wider w-[95%] lg:w-1/2 text-center font-semibold">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            </div>
            {/* mail phone button modern */}
            <div className="flex flex-row pt-4 justify-center space-x-4">
                <a href="mailto:iamprajwalladkat@gmail.com" className="flex items-center space-x-2 text-blue-500 dark:text-black bg-white dark:bg-white  px-3 py-2 rounded-lg duration-200 ease-linear hover:scale-110  font-semibold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <p className="text-lg">
                        Mail
                    </p>
                </a>
                <a href="tel:+919922334455" className="flex items-center space-x-2 dark:text-black text-blue-500 font-semibold bg-white  dark:bg-white px-3 py-2 hover:scale-110 duration-200 ease-linear rounded-lg text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0
                        11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-lg">
                            Phone
                        </p>
                </a>
                </div>
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="py-3 px-4 rounded-lg focus:ring-2 focus:ring-fuchsia-700 duration-500 outline-none shadow-lg w-full md:w-1/2 text-gray-200 dark:bg-black/40"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="py-3 px-4 rounded-lg focus:ring-2 focus:ring-fuchsia-700 duration-500 outline-none shadow-lg w-full md:w-1/2 text-gray-200 dark:bg-black/40"/>
            <textarea
                placeholder="Message"
                rows="5"
                name="message"
                className="py-3 px-4 rounded-lg focus:ring-2 focus:ring-fuchsia-700 duration-500 outline-none shadow-lg w-full md:w-1/2 text-gray-200 dark:bg-black/40"
            />
            <button
                type="submit"
                className="py-2 px-4 rounded-lg shadow-md bg-white text-indigo-500 active:scale-95 drop-shadow-2xl duration-200 ease-linear font-bold w-full md:w-1/3"
            >
                Send Message
            </button>
        </motion.form>
        </div>
    );
}

export default ContactForm;