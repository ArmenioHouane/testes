"use client";

import React from "react";

const Timeline = () => {
  return (
    <div className="py-16 bg-white dark:bg-backdarkdm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative px-4 pb-8 bg-white dark:bg-backdarkdm sm:rounded-2xl sm:px-10 sm:pb-10 lg:px-12 max-w-[70rem] mx-auto">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 mt-2 text-3xl font-extrabold text-center leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              My Journey
            </h2>
            <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
              Explore the evolution of my programming and web development career. From my initial steps in 
              learning the basics to my current focus on cutting-edge technologies and open-source contributions, 
              this journey highlights the growth and milestones I&apos;ve achieved along the way. Each phase represents a significant period of learning and development, showcasing how I&apos;ve built upon foundational skills, embraced advanced techniques, and continuously challenged myself to stay at the forefront of the industry.
            </p>
            <div className="relative">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
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
                  <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs  font-semibold  dark:text-primary-300">
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
                    2020 - 2021
                  </span>
                  <h3 className="mb-2.5 mt-2 text-lg font-semibold leading-none text-gray-900 dark:text-white">Initial Learning Phase</h3>
                  <p className="text-base font-normal text-gray-800 dark:text-gray-400">
                    During this phase, I began my journey into the world of programming and web development. I focused on learning the fundamentals and building a strong foundation.
                  </p>
                  <ul className="mt-2 list-disc list-inside ml-4 text-gray-500 dark:text-gray-600">
                    <li><span className="font-bold dark:text-green-300 text-green-600">HTML & CSS:</span> Learned the basics of web structure and styling.</li>
                    <li><span className="font-bold dark:text-green-600 text-green-600">JavaScript:</span> Started with the core concepts and basic scripting.</li>
                    <li><span className="font-bold dark:text-green-800 text-green-600">Basic Projects:</span> Created simple web pages and static websites.</li>
                  </ul>
                </li>
                <li className="ms-6 mt-6">
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
                  <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-semibold dark:bg-primary-900 dark:text-primary-300">
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
                    2022 - 2023
                  </span>
                  <h3 className="mb-1.5 mt-2 text-lg font-semibold leading-none text-gray-900 dark:text-white">Intermediate Proficiency</h3>
                  <p className="text-base font-normal text-gray-800 dark:text-gray-400">
                    In this phase, I continued to build on my skills and experience. I delved deeper into advanced topics and worked on more complex projects, gaining intermediate proficiency in various technologies and tools.
                  </p>
                  <ul className="mt-2 list-disc list-inside ml-4 text-gray-500 dark:text-gray-600">
                    <li><span className="font-bold dark:text-blue-400 text-blue-600">Advanced Front-End:</span> Mastered advanced concepts in React, including state management with Redux and context API.</li>
                    <li><span className="font-bold dark:text-blue-600 text-blue-600">Back-End Mastery:</span> Improved my skills in back-end development, focusing on database management and server-side scripting.</li>
                    <li><span className="font-bold dark:text-blue-800 text-blue-600">Project Highlights:</span> Developed several full-stack applications, integrating front-end and back-end technologies seamlessly.</li>
                  </ul>
                </li>
                <li className="ms-6 mt-6">
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
                  <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-black dark:bg-primary-900 dark:font-bold ">
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
                    2023 - Present
                  </span>
                  <h3 className="mb-1.5 mt-2 text-lg font-semibold leading-none text-gray-900 dark:text-white">Current Focus</h3>
                  <p className="text-base font-normal text-gray-800 dark:text-gray-400">
                    Currently, I am focusing on further honing my skills and exploring new technologies. I am working on several projects that challenge me to think creatively and solve complex problems.
                  </p>
                  <ul className="mt-2 list-disc list-inside ml-4 text-gray-500 dark:text-gray-600">
                    <li><span className="font-bold dark:text-indigo-800 text-indigo-600">Full-Stack Development:</span> Continually improving my expertise in both front-end and back-end development.</li>
                    <li><span className="font-bold dark:text-indigo-600 text-indigo-600">Modern Web Technologies:</span> Keeping up-to-date with the latest trends and tools in web development, including Next.js, Tailwind CSS, and TypeScript.</li>
                    <li><span className="font-bold dark:text-indigo-400 text-indigo-600">Open Source Contributions:</span> Actively contributing to open source projects and collaborating with the developer community.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
