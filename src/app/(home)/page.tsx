"use client";

import Image from "next/image";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import "./Home.css";

import heroLeftCard from "@/assets/heroLeft.png";
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
      <main className="enclosure">
        <section className="card bgHeroCard">
          <section className="heroCard ">
            <article style={{ width: "400px" }} className="headerText ">
              <div
                className="slickCard "
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                ✨ $7.5M seed raised with Accel & Square Peg
                <Image
                  ref={arrowRef}
                  src={arrowRight}
                  alt="arrowRight"
                  className="spacingArrowRight inline hover:animate-pulse"
                />
              </div>
              <div>
                <h1>Impactful stories. Made effortlessly</h1>
                <p>
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
                className="heroLeftBlock mx-2 object-contain"
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
