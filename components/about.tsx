"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I started as a software engineer around 4 years ago, i already worked
        for several company like Bank Central Asia(one of the largest private
        bank in Indonesia), Telkom Indonesia (multinational telecommunications
        in my country). Currently I working as a Senior Frontend Engineer at
        Wastec Indonesia. In this office I recently build Sustainabilty Report
        application dashboard and software as a service Apps for Eco Friendly
        bussiness. <br />
        <br /> I will help you turn your brilliant ideas into reliable and
        high-quality software. My software development company is truly proud of
        the wonderful clients we have worked with. I enjoy a long-term
        partnership.
      </p>
    </motion.section>
  );
}
