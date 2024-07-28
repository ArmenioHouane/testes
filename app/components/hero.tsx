"use client";
import Image from 'next/image';
import ThemeToggle from "./toggle";
import { Button } from "./material";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "./material";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";









const Hero = () => {
  
  return (
    <>
      
      <div className="relative w-full bg-white dark:bg-backdarkdm">
        <div className="grid place-items-center min-h-[92vh] px-8">
          <div className="container mx-auto grid place-items-center h-max text-center">
            <div className="w-72 h-72 overflow-hidden rounded-full flex items-center justify-center bg-white shadow-md">
            <Image
  src="/images/profile.JPG"
  alt="Armenio Amalio"
  width={500} // Adjust width as needed
  height={500} // Adjust height as needed
  className="w-full h-auto" // Tailwind CSS classes
/>
              </div>

             <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-texto dark:text-gray-200">
              Armênio Amálio Houane
              </h1>
              <p className="block antialiased  text-xl font-normal leading-relaxed text-gray-600 mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
               >
                Welcome to my professional resume page! Below, you&apos;ll find a
                comprehensive overview of my skills, qualifications, and experience
                in the field of software engineering.
               </p>
             <h2 className="mt-12 mb-4 text-blue-gray-900  uppercase dark:text-gray-500 font-bold"
               >
              Connect with me on:
              </h2>


              <div className="gap-2 lg:flex ">
            <a href="https://web.facebook.com/armenio.amalio.5" target="_blank" rel="noopener noreferrer">
              <IconButton variant="text" color="gray" >
                <FaFacebook className="fa-brands  fa-facebook text-lg  dark:text-white hover:text-blue-500 dark:hover:text-blue-500" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/armenioamalio2k3/" target="_blank" rel="noopener noreferrer">
              <IconButton variant="text" color="gray">         
                <FaInstagram className="fa-brands fa-instagram text-lg  dark:text-white hover:text-blue-500 dark:hover:text-blue-500" />
              </IconButton>
            </a>
            <a href="https://github.com/ArmenioHouane/" target="_blank" rel="noopener noreferrer">
              <IconButton variant="text" color="gray">
                <FaGithub className="fa-brands fa-github text-lg  dark:text-white hover:text-blue-500 dark:hover:text-blue-500" />
              </IconButton>
            </a>
            <a href="http://www.linkedin.com/in/arménio-houane-b32246242" target="_blank" rel="noopener noreferrer">
              <IconButton variant="text" color="gray">
              <FaLinkedin className="fa-brands fa-linkedin text-lg  dark:text-white   hover:text-blue-500 dark:hover:text-blue-500" />
              </IconButton>
             </a>
          </div>
              

             
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
