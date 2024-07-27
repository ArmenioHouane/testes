

import Image from "next/image";
import InformationSection from "./components/information";
import Hero from "./components/hero";
import Cardal from "./components/card";
import Timeline from "./components/timeline";
import Languages from "./components/language";
import Footer from "./footer";


export default function Home() {
  return (
    <>
    <Hero />
    <InformationSection />
    <Timeline />
    <Languages />
    

    <Cardal />
    <Footer />



    

  </>
  );
}
