import React from 'react'
import {motion} from "framer-motion"
import { sanityClient } from '../sanity';
const NotificationBar = () => {
  const [message, setMessage] = React.useState("")
  const getNotification = async () => {
    const query = `*[_type == "notification"]`;
    const data = await sanityClient.fetch(query)
    setMessage(data[0].message)
    return data
  }

  React.useEffect(() => {
    getNotification()
  }, [])

  return (
    // notification top panel
    <motion.div 
    initial={{y: -100, opacity:0.5}}
    animate={{y: 0, opacity:1}}
    transition={{duration: 0.5, delay:1}}
    className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-center py-2 lg:px-4 w-[100%] rounded-md">
        <p className="text-sm lg:text-base font-bold px-2 lg:px-0">
            {message}
        </p>
    </motion.div>
  )
}

export default NotificationBar