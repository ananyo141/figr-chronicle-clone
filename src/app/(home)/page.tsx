import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Page;
