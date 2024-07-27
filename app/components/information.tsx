

"use client";
import { Typography } from "./material";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "./info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Engineering in Computer Engineering - Universidade Técnica de Moçambique ",
    date: "2020-2024",
    children:
      "This education has enabled me to design and develop robust information systems, manage information technologies, and tackle complex challenges in the field of computing and technology.",
      
  },
  {
    icon: AcademicCapIcon,
    title: "Responsive Web Design Certification - FreeCodeCamp",
    date: "2023",
    children:
      "The Responsive Web Design certification signifies competence in designing and developing websites that adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: AcademicCapIcon,
    title: "JavaScript Algorithms and Data Structures Certification - FreeCodeCamp",
    date: "2023",
    children:
      "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
  },
  {
    icon: AcademicCapIcon,
    title: "Front End Development Libraries Certification - FreeCodeCamp",
    date: "2024",
    children:
      "This certificationshowcases expertise in Bootstrap, jQuery, Sass, React, and Redux. Proficient in building responsive designs, dynamic JavaScript functionality, enhanced CSS capabilities, interactive user interfaces, and efficient state management for modern Single Page Applications (SPAs).",
  },
  {
    icon: AcademicCapIcon,
    title: "Scientific Computing with Python Certification - FreeCodeCamp",
    date: "2023",
    children:
      "The Scientific Computing with Python curriculum teaches essential skills for data analysis and manipulation using Python, a versatile programming language. Explore data structures, algorithms, Object-Oriented Programming, and advanced calculation techniques in this comprehensive course on scientific computing fundamentals.",
  },
  {
    icon: AcademicCapIcon,
    title: "Data Visualization Certification - FreeCodeCamp",
    date: "2024",
    children:
      "The Data Visualization Certification equips you with the skills to create impactful visualizations of data using D3.js. Master the art of crafting dynamic charts, graphs, and maps that enhance understanding and insight. Learn to integrate data seamlessly using JSON and APIs, essential for building interactive and real-time data-driven applications. Perfect for showcasing your proficiency in transforming complex data into clear, engaging visual stories.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Freelancer Web Developer",
    date: "2023 - PRESENT",
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the project's specifications.",
  }
];

const SKILLS = [

  {
    
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Technical Skills",
    children:(
      
      <>
        <Typography variant="body" component="div">
        Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>PHP</li>
          <li>Sass</li>
         
        </ul>
      </>
    ).props.children,},
  {
    icon: FireIcon,
    title: "Front-End Development Libraries",
    date: "Technical Skills",
    children: (
      
      <>
        <Typography variant="body" component="div">
          Competent in working with front-end JavaScript frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          
          <li>TypeScript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          
          <li>React</li>
          <li>Redux</li>
          
          <li>Next.js</li>
          <li>Tailwind</li>
          <li>Angular</li>
          
        </ul>
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "Back-End Development Libraries",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
          Competent in working with back-end frameworks and libraries to develop robust and scalable web applications.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Laravel</li>
          <li>PHP</li>
        </ul>
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "Programming  Languages",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
          Proficient in programming languages used for various aspects of software development.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>Javascript</li>
          <li>PHP</li>
          <li>C#</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "Build Tools and Hosting",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
          Experienced in using build tools and hosting platforms for deploying web applications.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>Vite</li>
          <li>Netlify</li>
          <li>Amazon Web Services (AWS)</li>
          <li>Google Cloud Plataform (GCP)</li>
        </ul>
       
      </>
    ).props.children,
  },{
    icon: FireIcon,
    title: "Databases",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
        Skilled in working with various database technologies for data storage and management.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>SQL</li>
          <li>NoSQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
       
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "Tools and Technologies",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
        Proficient in using various tools and technologies for web development and project management.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>Jest (Testing)</li>
          <li>API REST</li>
          <li>Jira</li>
          <li>Google Cloud Plataform - GCP</li>
        </ul>
       
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "DevOps and CI/CD",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
        Proficient in DevOps methodologies aimed at enhancing collaboration between development and operations teams to streamline software delivery and improve deployment frequency, such as continuous integration, continuous delivery, and automated testing.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>GitLab CI/CD</li>
          <li>Amazon Web Services (AWS)</li>
          <li>Netlify</li>
          
        </ul>
       
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "Advanced Front-End Development",
    date: "Technical Skills",
    children: (
      <>
        <Typography variant="body" component="div">
        Specializing in advanced front-end development techniques to enhance user experience and application performance.
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-medium  dark:text-blue-300" component="div">
          Skills:
        </Typography>
        <ul className="list-disc pl-5 mb-2 text-black dark:text-gray-400">
          <li>WebAssembly</li>
          <li>GSAP</li>
          <li>Three.js</li>
          <li>Data Visualization with D3.js</li>
          <li>Working with JSON APIs and AJAX</li>
          
        </ul>
       
      </>
    ).props.children,
  },
  {
    icon: FireIcon,
    title: "Networking",
    date: "Technical Skills",
    url: "#",
    children:
      "Knowledgeable about networking concepts and technologies, certified with CCNA (Cisco Certified Network Associate).",
  },
  {
    icon: FireIcon,
    title: "Attention to Detail",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  
  {
    icon: FireIcon,
    title: "Time Management",
    date: "Soft Skills",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8 dark:bg-backdarkdm">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl dark:text-white font-bold">
              Education & Certifications
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my education history.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 ">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold  dark:text-white">
              Experience
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my experience as a developer.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold  dark:text-white">
              Skills
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
