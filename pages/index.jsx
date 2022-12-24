import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import ContactForm from '../components/ContactForm'
import FloatingButton from '../components/FloatingButton'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Blogs from '../components/Blogs'
import Script from 'next/script'
import * as gtag from "../lib/gtag";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [info, setInfo] = useState({});
  const [socials, setSocials] = useState({});
  const [experience, setExperience] = useState([])
  const router = useRouter();
  const getPersonalData = () => {
    const query = groq`*[_type == "info"][0]{
      ...,
      socials[]->,
    }`;
    sanityClient.fetch(query).then((res) => {
      setInfo(res);
    });
  }

  const getSocials = () => {
    const query = groq`*[_type == "socials"]`;
    sanityClient.fetch(query).then((res) => {
      setSocials(res);
      console.log(socials);
    }
    );
  }

  const getExperience = async () => {
    const query = `*[_type == "experience"]{
      ...,
      technologies[]->
    }`
    const data = await sanityClient.fetch(query)
    setExperience(data)
  }


  useEffect(() => {
    // import data only once
    getPersonalData();
    getExperience()
  }, []);


 useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Prajwal&apos;s Portfolio</title>
        <meta name="description" content="Prajwal's portfolio web app" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-727MKKG5GH" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-727MKKG5GH');
        `,
        }}
      />
      <main className='bg-gradient-to-br from-white to-black/10 dark:bg-gradient-to-r dark:from-[#2B2B2B] dark:to-[#000] duration-500 ease-linear px-0 lg:px-10 w-screen'>
        <section className="min-h-screen w-full">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"

          />
          <Hero info={info} socials={socials} />
          <section className="flex bg-gray-100 
          dark:bg-black/20 pb-5
           mt-10 rounded-lg shadow-xl flex-col items-center justify-center space-y-10">
            <Experience experience={experience} title="Experience" />
            <Skills title="Skills" />
            <Projects title="Projects" />
            <Blogs title="Blogs" />
            <ContactForm />
            <FloatingButton />
          </section>
          <Footer info={info} />
        </section>
      </main>
    </motion.div>
    </>
  );
}

