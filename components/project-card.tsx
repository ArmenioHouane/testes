import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/types/project"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full rounded-[4px] shadow-lg   dark:border-[#3b3b3b] dark:bg-[#1a1a1b]">
      <CardHeader>
        
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative w-full  h-48 mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover rounded-[3px]"
          />
        </div>
        <p className="text-sm text-neutral-500 mb-4 dark:text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge  className="bg-[#EAEAEA] dark:bg-[#2c2c2c]"  key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button  className="bg-black dark:bg-[#424242] shadow-lg rounded-[6px] text-white dark:border-[#3b3b3b] hover:bg-[#F5F5F5] hover:text-black dark:hover:bg-white" variant="outline" asChild>
          <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </a>
        </Button>
        <Button className="ml-2  shadow-lg hover:bg-[#080808] hover:text-white dark:hover:bg-[#fff] dark:hover:text-black" asChild>
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

