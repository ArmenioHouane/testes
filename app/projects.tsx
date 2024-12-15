
"use client";

import React from "react";
import { Typography} from "./components/material";
import { ProjectCard } from '@/app/components/project-card'



export function Projects() {

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/images/placeholder.svg',
      sourceCodeUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveDemoUrl: 'https://ecommerce-platform-demo.vercel.app',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with real-time updates and team collaboration features.',
      technologies: ['Vue.js', 'Firebase', 'Vuex'],
      imageUrl: '/images/placeholder.svg',
      sourceCodeUrl: 'https://github.com/yourusername/task-management-app',
      liveDemoUrl: 'https://task-management-app-demo.vercel.app',
    },
    {
      id: 3,
      title: 'Weather Forecast Dashboard',
      description: 'An interactive weather dashboard that provides real-time weather data and forecasts for multiple locations.',
      technologies: ['React', 'Redux', 'OpenWeatherMap API'],
      imageUrl: '/images/placeholder.svg',
      sourceCodeUrl: 'https://github.com/yourusername/weather-forecast-dashboard',
      liveDemoUrl: 'https://weather-forecast-dashboard-demo.vercel.app',
    },
  ]
 
  return (
    <section className="min-h-screen py-12 px-8 lg:py-24 dark:bg-backdarkdm">
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

        <div className="  mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

        
      </div>

    

    </section>
  );
}

export default Projects;
