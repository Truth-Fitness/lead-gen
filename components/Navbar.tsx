"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

export default function NavbarContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/testimonials",
      label: "Testimonials",
    },
    {
      href: "/book",
      label: "Book Now",
    },
    {
      href: "https://shop.truthfitness.co.uk/",
      label: "Shop",
    },
  ];

  return (
    <header className="bg-gray-800 shadow-md  relative">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block" href="/">
          <div>
            <span className="sr-only">Home</span>
            <Logo height={70} />
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-md">
              {links.map((link) => (
                <li
                  key={link.href}
                  className="text-gray-200 hover:text-gray-300"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="block rounded bg-gray-700 hover:bg-gray-900 p-2.5 text-gray-200 transition hover:text-gray-300 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-6 text-md shadow-md py-6 border-t-[1px] border-gray-700">
              {links.map((link) => (
                <li
                  key={link.href}
                  className="text-gray-200 hover:text-gray-300"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
