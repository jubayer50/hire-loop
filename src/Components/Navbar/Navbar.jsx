"use client";

import { useState } from "react";
import { Button, Link, Separator } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>Browse Jobs</li>
      <li>Company</li>
      <li>Pricing</li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex items-center justify-between px-4 py-3 max-w-330 mx-auto ">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>Logo</div>
        </div>

        <div className="flex items-center space-x-8 rounded-xl px-5 py-2.5 md:bg-linear-to-r from-[#222222] to-[#22222200] ">
          <ul className="hidden items-center gap-4 md:flex">{links}</ul>

          <Separator
            orientation="vertical"
            className="bg-white/50 hidden md:block"
          />

          <div className="flex items-center gap-4">
            <p className="text-[#5C53FE]">Sign In</p>

            <Button className={"bg-white text-black rounded-lg"}>
              Get Started
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
