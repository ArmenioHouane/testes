import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink} from 'lucide-react'
import { Github } from 'lucide-react';
import Image from "next/image"

interface Project {
  id: number
  title: string
  imageUrl: string
  description: string
  technologies: string[]
  sourceCodeUrl: string
  liveDemoUrl: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden dark:border-[#3b3b3b] dark:bg-[#111113] flex flex-col">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={300}
        height={200}
        className="w-full object-cover h-48"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary"  className="bg-white dark:bg-[#161616]">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto ">
        <div className="flex justify-between w-full">
          <Button variant="outline" asChild className="bg-black text-white dark:border-[#3b3b3b] hover:bg-[#F5F5F5] hover:text-black dark:hover:bg-[blue-gray-400]">
            <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </a>
          </Button>
          <Button asChild className="ml-2 hover:bg-[#080808] hover:text-white dark:hover:bg-[#fff] dark:hover:text-black">
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

