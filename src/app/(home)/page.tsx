import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import TextScroll from "./TextScroll";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <TextScroll />
    </>
  );
};

export default Page;
