// components/FeatureGeneral.tsx

import React from 'react';
import Image from 'next/image';

type IconBlockProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const FeatureGeneral = () => (
  <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-backdarkdm">
    <div className="max-w-[85rem] mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <Image
          className="w-full object-cover max-h-[33rem] rounded-xl"
          src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Image Description"
          layout="fill"
        />
      </div>

      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white">
            We tackle the challenges start-ups face
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
            Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            <IconBlock
              icon={
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              }
              title="Creative minds"
              description="I choose my collaborators carefully. The people I work with are the secret to producing great work."
            />

            <IconBlock
              icon={
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              }
              title="Simple and affordable"
              description="We provide easy-to-use and cost-effective solutions tailored to your needs. From digital storage to custom applications, we make technology accessible and affordable."
            />

            <IconBlock
              icon={
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              }
              title="Industry-leading documentation"
              description="Our documentation and extensive Client libraries contain everything a business needs to build a custom integration."
            />

            <IconBlock
              icon={
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              title="Designing for people"
              description="We actively pursue the right balance between functionality and aesthetics, creating delightful experiences."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const IconBlock = ({ icon, title, description }: IconBlockProps) => (
  <div className="flex gap-x-5">
    {icon}
    <div className="grow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  </div>
);

export default FeatureGeneral;
