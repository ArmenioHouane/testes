
"use client";

import React from 'react';
import { Navbar } from '../navbar';
import Footer from '../footer';
import FeatureGeneral from '../components/featuregeneral';



const ServicePage = () => {
  return (
    <>
    <Navbar />
    <FeatureGeneral />
    
  



<div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-backdarkdm ">
      {/* Grid */}
      <div className="max-w-[85rem] mx-auto ">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
            Hire us
          </h1>
          <p className="mt-1 md:text-lg text-gray-800 dark:text-neutral-200">
            We help brands and platforms turn big ideas into beautiful digital
            products and experiences.
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What can I expect?
            </h2>
            <ul className="mt-2 space-y-2">
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-600 dark:text-neutral-400">
                  Industry-leading design
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-600 dark:text-neutral-400">
                  Developer community support
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-600 dark:text-neutral-400">
                  Simple and affordable
                </span>
              </li>
            </ul>
          </div>
        
          <div className="mt-10 flex items-center gap-x-5">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              <span className="inline-flex justify-center items-center size-8 rounded-full bg-blue-600 text-white ring-2 ring-white">
                <svg
                  className="size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
            </div>
            {/* End Avatar Group */}
            <span className="text-sm text-gray-500 dark:text-neutral-500">
              Trusted by many customers
            </span>
          </div>
        </div>
        {/* End Col */}
        <div className="relative">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:bg-black bg-dropdm dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Fill in the form
            </h2>
            <form>
              <div className="mt-6 grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-hire-us-1"
                      id="hs-firstname-hire-us-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hs-lastname-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-hire-us-1"
                      id="hs-lastname-hire-us-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>
                {/* End Grid */}




                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="hs-work-email-hire-us-1"
                    id="hs-work-email-hire-us-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  />
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1  gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-phone-number-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-company-hire-us-1"
                      id="hs-company-hire-us-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="hs-about-hire-us-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    id="hs-about-hire-us-1"
                    name="hs-about-hire-us-1"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </form>
            {/* End Grid */}
            {/* Checkbox */}
            <div className="mt-3 flex">
              <div className="flex">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <div className="ms-3">
                <label
                  htmlFor="remember-me"
                  className="text-sm text-gray-600 dark:text-neutral-400"
                >
                  By submitting this form I have read and acknowledged the{" "}
                  <a
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                    href="#"
                  >
                    Privacy policy
                  </a>
                </label>
              </div>
            </div>
            {/* End Checkbox */}
            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Send inquiry
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                We &apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      </div>
      {/* End Grid */}
    </div>


    <Footer />

    </>
  );
};

export default ServicePage;
