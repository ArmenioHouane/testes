"use client";
import { IconButton } from "./material";
import { FaGithub } from "react-icons/fa";


 
const Icon = () => {
  return (
    <div className="flex gap-4">
       <a href="https://web.facebook.com/armenio.amalio.5" target="_blank" rel="noopener noreferrer">
              <IconButton variant="text" color="gray" >
                <FaGithub className="text-lg  dark:text-white hover:text-blue-500 dark:hover:text-blue-500" />
               
              </IconButton>
            </a>
    </div>
  );
}
export default Icon;