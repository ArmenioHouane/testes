
"use client";

import { Typography, Button } from "./components/material";
import Link from 'next/link';

const LINKS = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
 
  { name: "Service", href: "/service" }
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-20 bg-bgSea dark:bg-backdarkdm">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700 hover:text-slate-950">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="/about" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="/contact" target="_blank">
              Armenio
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <Typography
                    as="a"
                    variant="small"
                    className="font-bold text-gray-700 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
