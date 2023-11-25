"use client";

import Image from "next/image";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react";

import heroLeftCard from "@/assets/heroLeft.png";
import heroBackground from "@/assets/hero-background.png";
import cursor from "@/assets/cursor.svg";
import heroCard from "@/assets/heroCard.png";
import arrowRight from "@/assets/arrow-right.svg";

gsap.registerPlugin(ScrollTrigger);

const NavButtons = ["Product", "Our Story", "Careers"];

const Hero = () => {
  const arrowRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const onEnter = (e: any) => {
    gsap.to(e.target, { paddingRight: "13px" });
    gsap.to(arrowRef.current, { x: 8 });
  };

  const onLeave = (e: any) => {
    gsap.to(e.target, { paddingRight: "4px" });
    gsap.to(arrowRef.current, { x: 0 });
  };

  useLayoutEffect(() => {
    gsap.to(".card", {
      duration: 0.8,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(".headerText", {
      duration: 0.8,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    const tl = gsap.timeline();

    ScrollTrigger.create({
      animation: tl,
      trigger: ".card",
      start: "410px center",
      scrub: 0.6,
    });

    tl.to(".card", {
      rotationX: -60,
      transformOrigin: "top",
    });
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url(${heroBackground.src})`,
      }}
      className="h-screen"
    >
      <ul className=" pt-12 mb-12 justify-center text-center gap-4 text-white flex">
        {NavButtons.map((button, index) => (
          <li
            key={`nav-button-${index}`}
            onClick={() => setSelected(index)}
            className={`cursor-pointer ${
              selected === index && "border-b-white border-b"
            }`}
          >
            {button}
          </li>
        ))}
      </ul>
      <section
        style={{
          backgroundImage: `url(${heroCard.src})`,
          cursor: `url(${cursor.src}), pointer`,
        }}
        className="card scale-150 opacity-0 m-auto bg-no-repeat w-max relative z-[1] bg-cover"
      >
        <section className="heroCard p-16 flex mx-auto">
          <article
            style={{ width: "400px" }}
            className="headerText flex flex-col justify-center"
          >
            <div
              className="w-max bg-[rgb(26,0,154)] text-white rounded-full p-1 pl-2 inline-block text-sm font-normal"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              ✨ $7.5M seed raised with Accel & Square Peg
              <Image
                ref={arrowRef}
                src={arrowRight}
                alt="arrowRight"
                className="mx-1 inline hover:animate-pulse"
              />
            </div>
            <div>
              <h1 className="text-gray-200 my-5 text-6xl font-semibold leading-[67px]">
                Impactful stories. Made effortlessly
              </h1>
              <p className="text-gray-500">
                Chronicle is a modern format of presentations. Deliver
                impressive, interactive stories without the design guesswork!
              </p>
            </div>
          </article>
          <article>
            <Image
              src={heroLeftCard}
              width={400}
              height={468}
              alt="blocks"
              className="mx-2 object-contain"
            />
          </article>
        </section>
      </section>
    </main>
  );
};

export default Hero;
