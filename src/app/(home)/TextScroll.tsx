"use client";

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      const splitText = new SplitType(textElement, { types: "chars" });

      // Use splitText.chars directly in the animation
      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.01,
      });
    }
  }, []);

  return (
    <section className="bg-black pt-52 pb-80 w-full">
      <p className="text-7xl mx-auto text-white max-w-7xl text-left font-bold leading-tight" ref={textRef}>
        In Chronicle everything is made with Blocks that come with pixel perfect
        design, interactivity and motion out of the box. Instead of designing
        from scratch, simply choose the right one from our library of blocks and
        see the magic unfold.
      </p>
    </section>
  );
};

export default TextScroll;
