import React from "react";
import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
import { navLinks } from "@/constants/constants";
import Button from "./ui/Button";

export const Navbar: React.FC = () => {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          <div>
            <Image
              src={logoImage}
              alt="layears logo"
              className="h-9 md:h-auto w-auto ml-2"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <div className="gap-4 md:flex hidden">
              <Button
                className="border border-white h-12 rounded-full px-6 font-medium"
                variant="secondary"
              >
                Log in
              </Button>
              <Button
                className="border text-black bg-green-400 border-white h-12 rounded-full px-6 font-medium"
                variant="primary"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
