"use client";

import { useState } from "react";
import { Button, Separator } from "@heroui/react";
import MyNavLink from "./MyNavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const dashboardHref = {
    seeker: "/dashboard/seeker",
    recruiter: "/dashboard/recruiter",
    admin: "/dashboard/admin",
  };

  const links = (
    <>
      <MyNavLink href={"/"} pathName={pathName}>
        Home
      </MyNavLink>

      <MyNavLink href={"/jobs"} pathName={pathName}>
        Browse Jobs
      </MyNavLink>

      <MyNavLink href={"/plans"} pathName={pathName}>
        Pricing
      </MyNavLink>

      {user && (
        <MyNavLink
          href={dashboardHref[user?.role || "seeker"]}
          pathName={pathName}
        >
          Dashboard
        </MyNavLink>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex items-center justify-between px-3 py-3 max-w-330 mx-auto ">
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

          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt=""
                width={200}
                height={200}
                className="w-26 md:w-32"
              ></Image>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-8 rounded-xl px-5 py-2.5 md:bg-linear-to-r from-[#222222] to-[#22222200] ">
          <ul className="hidden items-center gap-4 md:flex">{links}</ul>

          <Separator
            orientation="vertical"
            className="bg-white/50 hidden md:block"
          />

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <p>Hi, {user?.name.slice(0, 2)}</p>

                <Button
                  size="sm"
                  onClick={async () => await authClient.signOut()}
                  variant="ghost"
                  className={"rounded-lg"}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-[#5C53FE]">
                  log In
                </Link>
              </div>
            )}

            <div>
              <Button
                size="sm"
                className={"bg-white text-black rounded-lg hidden md:block"}
              >
                Get Started
              </Button>
            </div>
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
