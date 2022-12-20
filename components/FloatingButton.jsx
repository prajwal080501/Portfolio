import React, {useState} from 'react';
import { IoIosArrowUp } from 'react-icons/io';
const FloatingButton = ({ onClick }) => {
    const [scroll, setScroll] = useState(false);

//   show button when windowy scroll greater than 100
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    if(typeof window !== 'undefined'){
        window.addEventListener('scroll', handleScroll);
    }
    
  return (
    <a
      href="#hero"
      className={
        'fixed bottom-5 right-5 bg-blue-600 hover:scale-110 hover:bg-blue-700 dark:bg-white text-white transition-all ease-linear rounded-full p-2 shadow-lg ' +
        (scroll ? 'inline duration-200 eease-linear' : 'hidden ease-linear duration-200')
      }
    >
      <IoIosArrowUp className='font-bold dark:text-black text-4xl'/>
    </a>
  );
};

export default FloatingButton;
