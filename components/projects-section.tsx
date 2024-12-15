import { ProjectCard } from "./project-card"
import { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and secure checkout process.",
    imageUrl: "/images/placeholder.svg",
    sourceCodeUrl: "https://github.com/username/ecommerce-platform",
    liveDemoUrl: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, user authentication, and project tracking.",
    imageUrl: '/images/placeholder.svg',
    sourceCodeUrl: "https://github.com/username/task-manager",
    liveDemoUrl: "https://task-manager-demo.com",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "Weather Forecast Dashboard",
    description: "An interactive weather forecast dashboard that provides real-time data and 7-day forecasts for multiple locations.",
    imageUrl: "/images/placeholder.svg",
    sourceCodeUrl: "https://github.com/username/weather-dashboard",
    liveDemoUrl: "https://weather-dashboard-demo.com",
    technologies: ["React", "Redux", "OpenWeatherMap API", "Chart.js"],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-12 px-4  md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

