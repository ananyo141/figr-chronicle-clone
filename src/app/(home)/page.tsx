"use client";

import Image from "next/image";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

import heroLeftCard from "@/assets/heroLeft.png";
import heroBackground from "@/assets/hero-background.png";
import heroCard from "@/assets/heroCard.png";
import arrowRight from "@/assets/arrow-right.svg";

const Hero = () => {
  const arrowRef = useRef(null);

  const onEnter = (e: any) => {
    gsap.to(e.target, { paddingRight: "13px" });
    gsap.to(arrowRef.current, { x: 8 });
  };

  const onLeave = (e: any) => {
    gsap.to(e.target, { paddingRight: "4px" });
    gsap.to(arrowRef.current, { x: 0 });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".card", 0.8, { opacity: 1, y: -20, ease: Power3.easeOut });
    gsap.to(".headerText", 0.8, {
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

    tl.to(".card", { rotationX: -60 });
  }, []);

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${heroBackground.src})`,
        }}
        className="pt-36 h-screen"
      >
        <section
          style={{
            backgroundImage: `url(${heroCard.src})`,
          }}
          className="card opacity-0 m-auto bg-no-repeat w-max relative z-[1] bg-cover"
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
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
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
      <section className="h-screen bg-gray-100">hello</section>
    </>
  );
};

export default Hero;
