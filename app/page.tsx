import Navbar from "./navbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import InformationSection from "./components/information";
import Hero from "./components/hero";
import Cardal from "./components/card";
import Timeline from "./components/timeline";
import Languages from "./components/language";
import { ProjectsSection } from "@/components/projects-section";
import Footer from "./footer";
 
const DynamicFrameworkProficiency = dynamic(() => import ('./components/FrameworkProficiency'), {
  ssr: false,
  
}
);

const DynamicLanguageProficiency = dynamic(() => import ('./components/ProgrammingProeficiency'), {
  ssr: false,
  
}
);




export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <InformationSection />
    <Timeline />
    <Languages />
    <DynamicFrameworkProficiency />
    <DynamicLanguageProficiency />
    <ProjectsSection />
   
    <Footer />



    

  </>
  );
}
