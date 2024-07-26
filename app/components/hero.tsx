"use client";
import ThemeToggle from "./toggle";
import { Button } from "./material";

const Hero = () => {
  return (
    <>
      <ThemeToggle />
      <div className="relative w-full bg-white dark:bg-black">
        <div className="grid place-items-center min-h-[92vh] px-8">
          <div className="container mx-auto grid place-items-center h-max text-center">
            <div className="w-72 h-72 overflow-hidden rounded-full flex items-center justify-center bg-white shadow-md">
              <p className="dark:text-red-400 font-extrabold">Hello</p>
              </div>

             <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-texto dark:text-texto">
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

              <Button>Button</Button>


             
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
