
"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "./components/material";

export function Projects() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24 dark:bg-backdarkdm">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4 dark:text-white">
            My Projects
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Explore my diverse projects, showcasing my skills in web development, data visualization, and advanced front-end technologies.
            Each project highlights my ability to create effective, scalable, and visually engaging solutions.
          </Typography>


        </div>

        
      </div>

    

    </section>
  );
}

export default Projects;
