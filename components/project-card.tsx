import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/types/project"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-sm text-neutral-500 mb-4 dark:text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </a>
        </Button>
        <Button asChild>
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

