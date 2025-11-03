"use client";
import React from "react";
import { TickerTech, Tech } from "@/app/components/index";
import {Heading} from '@/app/components/atoms/typography/index'

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-contextBG dark:bg-contextDarkBG py-20 px-2 md:px-6">

        <Heading heading="Skills & Technologies" subheading="A blend of creativity and technical skill — here’s what powers my projects."/>

      <TickerTech />

      <Tech />
    </section>
  );
};

export default Skills;
