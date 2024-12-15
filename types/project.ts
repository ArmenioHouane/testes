export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  sourceCodeUrl: string;
  liveDemoUrl: string;
  technologies: string[]; // New field for technology tags
}

