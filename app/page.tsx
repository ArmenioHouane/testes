

import Image from "next/image";
import ThemeToggle from "./components/toggle";

export default function Home() {
  return (
    <div className="p-4">
    <h1 className="text-2xl">Welcome to my Next.js App</h1>
    <ThemeToggle />
  </div>
  );
}
