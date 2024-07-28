
"use client";
import React from "react";
import Link from "next/link";
import {
  MTNavbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "./components/material";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import ThemeToggle from "./components/toggle";


const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "/contact" },
];

function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <li>
      <Link href={href}>
        <Typography
          as="a"
          href={href}
          variant="paragraph"
          color="gray"
          className="flex items-center gap-2 font-semibold text-black hover:text-bgHoverlm dark:text-white  dark:hover:text-bgHoverlm"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky dark:bg-backdarkdm bg-gray-100 top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between lg:pl-6">
      <ThemeToggle />
        <Typography
          as="a"
          href="/"
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold hover:text-bgHoverlm dark:text-white dark:hover:text-bgHoverlm pl-3"
        >
          Armênio Houane
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav.name} href={nav.href}>
              {nav.name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text"></Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto dark:text-white inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav) => (
              <NavItem key={nav.name} href={nav.href}>
                {nav.name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text"></Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
