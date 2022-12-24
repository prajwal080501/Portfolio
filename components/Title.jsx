import React from 'react'
import { motion } from "framer-motion";
const Title = ({title}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start space-y-3">
            <div className=" w-20 h-3 rounded-lg bg-gradient-to-br from-pink-600 to-fuchsia-400" />
            <h3 className="text-4xl py-1 font-extrabold dark:text-white">{title}</h3>
        </motion.div>
    )
}

export default Title