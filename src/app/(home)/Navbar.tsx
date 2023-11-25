"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin, Linear } from "gsap/all";

import logo from "@/assets/logo.png";

type Props = {};

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Navbar = (props: Props) => {
  useLayoutEffect(() => {
    gsap.to(".logo-text", {
      scrollTrigger: {
        trigger: ".logo-text",
        start: "top",
        end: "+=200",
        scrub: 3,
      },
      duration: 2,
      opacity: 0,
      scale: 2,
      text: "",
      ease: Linear.easeInOut,
      delay: 0.2,
    });
  }, []);

  return (
    <nav className="fixed flex justify-between w-full pt-5 px-8">
      <div className="flex justify-center navbar-content items-center">
        <Image src={logo} alt="logo" className="w-9" />
        <h2 className="text-lg ml-2 font-bold tracking-wider logo-text text-white">
          chronicle
        </h2>
      </div>
      <button className="text-xl hover:scale-105 duration-300 font-semibold rounded-lg px-3 py-1 bg-white text-gray-600">
        Join Beta
      </button>
    </nav>
  );
};

export default Navbar;
