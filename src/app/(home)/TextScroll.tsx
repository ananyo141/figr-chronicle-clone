"use client";

import React, { useLayoutEffect } from "react";
import gsap, { ScrollTrigger, Power3 } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const TextScroll = (props: Props) => {
  useLayoutEffect(() => {
    gsap.to(".line-1", {
      scrollTrigger: {
        trigger: ".logo-text",
        start: "top",
        end: "+=100",
        scrub: 50,
      },
      text: "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.",
      ease: Power3.easeInOut,
    });
  });

  return (
    <main className="h-screen bg-black flex flex-col items-center justify-center">
      <p className="line-1 animated-typewriter text-6xl text-left font-semibold text-gray-300 max-w-5xl"></p>
    </main>
  );
};

export default TextScroll;
