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
        Currently, I am working in Sydney, Australia as a full stack developer.
        In this role, I created a SaaS platform specializing in education
        technology, particularly in the area of Recognition of Prior Learning
        (RPL).
        <br /> I began my career as a software engineer around five years ago
        and have had the privilege of working with several prominent companies
        such as Bank Central Asia, one of the largest private banks in
        Indonesia, and Telkom Indonesia, a leading multinational
        telecommunications company. Most recently, I served as a Senior Frontend
        Engineer at Wastec Indonesia, where I developed a Sustainability Report
        application dashboard and software-as-a-service apps for eco-friendly
        businesses.
        <br />I am dedicated to turning your innovative ideas into reliable and
        high-quality software. My software development company is proud of the
        wonderful clients we have worked with and values the long-term
        partnerships we’ve established.
      </p>
    </motion.section>
  );
}
