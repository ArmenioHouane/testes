"use client";

import React from 'react';
import Image from 'next/image';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { Navbar } from '../navbar';
import Footer from '../footer';
// Define the features array
const features = [
  {
    name: 'Seamless Deployment:',
    description: 'I ensure that every project I work on is deployed smoothly and efficiently. My focus on best practices and modern tools guarantees that your digital solutions are up and running without a hitch, allowing you to focus on what matters most.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Robust Security:',
    description: 'Security is a top priority in all my projects. I implement SSL certificates and follow industry standards to protect your data and ensure secure communications. Your information and interactions are safeguarded against potential threats.',
    icon: LockClosedIcon,
  },
  {
    name: 'Reliable Backups:',
    description: 'I prioritize the safety of your data with regular and reliable backups. By maintaining up-to-date backups, I ensure that your information is protected and can be quickly restored in case of any issues, providing peace of mind and operational continuity.',
    icon: ServerIcon,
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="overflow-hidden bg-white dark:bg-backdarkdm py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">About Me</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Introduction</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Hi, I &apos;m Armenio Amalio Houane, a dedicated web developer with a passion for 
                  creating dynamic and responsive web applications. With a solid background in both 
                  front-end and back-end technologies, I am committed to delivering high-quality digital solutions.
                </p>

                <div >
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
        <h2 className="text-xl mt-3 font-semibold text-gray-900 dark:text-white sm:text-2xl">
        My Journey
        </h2>
        <p className="text-lg dark:text-gray-600 font-normal  dark:text-primary-300">
            I &apos;ve had a fulfilling journey in the world of web development, constantly learning and growing. Here &apos;s a detailed timeline of my professional trajectory
            </p>
       
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-2 ms-6">
            <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-primary-800 dark:text-primary-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              2018-2021 
            </span>
          



          </li>
          <li className="mb-10 ms-6">
          
            
            <h3 className="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
              Beginning
            </h3>
            
            <p className="text-base font-normal text-gray-500 dark:text-gray-500">
            <ul className="list-disc list-inside ">
    <li><span className="font-bold dark:text-blue-300 text-blackform">Started My Journey:</span> Delved into web development, learning the basics of HTML, CSS, and JavaScript.</li>
    <li><span className="font-bold dark:text-blue-300 text-blackform">University Ingress:</span> Enrolled at the Universidade Técnica de Moçambique, gaining foundational knowledge in ICT.</li>
    <li><span className="font-bold dark:text-blue-300 text-blackform">First Projects:</span> Built my first websites, experimenting with different layouts and designs.</li>
    <li><span className="font-bold dark:text-blue-300 text-blackform">Skills Gained:</span> Developed a solid understanding of web development fundamentals and began exploring more advanced topics.</li>
</ul>



            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-black ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>

            <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              2021-2022
            </span>

            <h3 className="mb-1.5 mt-2 text-lg font-semibold leading-none text-gray-900 dark:text-white">
            Expanding Skills
            </h3>
            <p className="text-base font-normal text-gray-800 dark:text-gray-400">
            During this period, I focused on building a strong foundation in both front-end and back-end development. I worked on developing dynamic user interfaces and robust server-side applications, which helped me gain practical experience and technical expertise.
            
            <ul className="mt-2 list-disc list-inside ml-4 text-gray-500 dark:text-gray-500">
        <li><span className="font-bold dark:text-blue-400 text-blackform">Front-End Frameworks:</span> Gained proficiency in React, Angular, and Vue.js, creating dynamic and interactive user interfaces.</li>
        <li><span className="font-bold dark:text-blue-300 text-blackform">Back-End Development:</span> Learned Node.js, Express, and PHP, building robust and scalable server-side applications.</li>
        <li><span className="font-bold dark:text-blue-400 text-blackform">Project Highlights:</span> Completed various projects, including personal websites, collaborative apps, and client work.</li>
    </ul>

            </p>
          
          
          </li>
          <li className="ms-6">
            <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-black ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>

            <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              2022-2023
            </span>




            <h3 className="mb-1.5 mt-2 text-lg font-semibold leading-none text-gray-900 dark:text-white">
            Professional Growth
            </h3>
            <p className="text-base font-normal text-gray-800 dark:text-gray-400">
            This phase marked a significant leap in my professional journey, where I tackled more complex projects and specialized in advanced web design techniques. My focus shifted towards enhancing problem-solving skills and mastering build tools for efficient deployment.
            <ul className="list-disc mt-2 list-inside ml-4  text-gray-500 dark:text-gray-500 ">
        <li><span className="font-bold dark:text-blue-300 text-blackform">Complex Projects:</span> Worked on larger, more complex projects, enhancing my problem-solving skills and attention to detail.</li>
        <li><span className="font-bold dark:text-blue-300 text-blackform">Responsive Design:</span> Specialized in creating responsive designs using CSS Grid, Flexbox, and media queries, ensuring seamless user experiences across devices.</li>
        <li><span className="font-bold dark:text-blue-300 text-blackform">Build Tools & Deployment:</span> Gained experience with build tools and deployment platforms like Vite, Netlify, AWS, and GCP, streamlining the development process.</li>
    </ul>
            </p>
          </li>


          <li className="ms-6 mt-4">
            <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-black ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
              <svg
                className="h-3 w-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>

            <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              2023-Present
            </span>




            <h3 className="mb-1.5 mt-2 text-lg font-semibold leading-none text-gray-900 dark:text-white">
            Current Focus
            </h3>
            <p className="text-base font-normal text-gray-800 dark:text-gray-400">
            In the current phase, I am leveraging my skills and experience to collaborate on innovative projects and continuously improve my expertise in advanced technologies. My work involves tackling real-world challenges and staying ahead in the web development field.
            <ul className="list-disc mt-2 list-inside ml-4 text-gray-500 dark:text-gray-500 ">
            <li><span className="font-bold dark:text-blue-300 text-blackform">Collaboration:</span> Partnering with my brother &apos;s enterprise to tackle innovative projects and solve real-world problems.</li>
        <li><span className="font-bold dark:text-blue-300 text-blackform">Advanced Skills:</span> Continuously enhancing my skills in TypeScript, Tailwind CSS, and Next.js to stay at the forefront of web development.</li>
        <li><span className="font-bold dark:text-blue-300 text-blackform">Ongoing Projects:</span> Working on a variety of projects, including web applications, system analysis, and more.</li>
     </ul>
            </p>
          </li>







        </ol>
       
      </div>
    </div>
                </div>



                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                My Approach to Web Development
                   </h2>
                   {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-indigo-600 dark:text-indigo-500">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline dark:text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>



              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="/images/img.JPG"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
