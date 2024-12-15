import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import Image from "next/image";
import Link from "next/link"; // Use Link for client-side navigation.

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  sourceCodeUrl: string;
  liveDemoUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
            <Badge key={tech} variant="secondary" className="bg-white dark:bg-[#161616]">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex justify-between w-full">
          <Link href={project.sourceCodeUrl} passHref>
            <Button variant="outline" className="bg-black text-white dark:border-[#3b3b3b] hover:bg-[#F5F5F5] hover:text-black dark:hover:bg-[blue-gray-400]">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={16}
                height={16}
                className="mr-2"
              />
              Source Code
            </Button>
          </Link>
          <Link href={project.liveDemoUrl} passHref>
            <Button className="ml-2 hover:bg-[#080808] hover:text-white dark:hover:bg-[#fff] dark:hover:text-black">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
