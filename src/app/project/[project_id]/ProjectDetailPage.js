"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { slideData } from "@/app/lib/data/index";
import GridBackground from "@/app/components/molecules/animation-background/ShaderBackground";
import ProjectFloatingNav from "@/app/components/organisms/projectDetail/ProjectNavigation";
import useDarkMode from "@/app/hooks/useDarkMode";
import DarkModeToggle from '@/app/components/atoms/theme-toggle/DarkModeToggle'
import ParticleOverlayBackground from "@/app/components/molecules/animation-background/ParticleOverlayBackground";

import { ProjectHeroSection, ProjectOverviewSection, KeyFeaturesSection, TechStackSection, VisualShowcaseSection, ChallengesSolutionsSection, FinalCTASection, ProjectNotFoundState,} from "@/app/components/organisms/projectDetail";
import {getProjectColors, handleShare,} from "@/app/components/organisms/projectDetail/utils";

import PerformanceMetricsSection from "@/app/components/organisms/projectDetail/PerformanceMetricsSection";
import LearningOutcomesSection from "@/app/components/organisms/projectDetail/LearningOutcomesSection";
import PagesStructureSection from "@/app/components/organisms/projectDetail/PagesStructureSection";

export default function ProjectDetailPage({ projectId }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);

  const { isDarkMode, toggleMode } = useDarkMode();
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.97]);

  const project = slideData.find((p) => p.id === projectId);
  const colors = getProjectColors(project, isDarkMode);

  if (!project) {
    return <ProjectNotFoundState />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-transparent">
      <DarkModeToggle />
      
      {/* Background Shader */}
      <div className="fixed inset-0 -z-10">
        <GridBackground />
      </div>

      <ParticleOverlayBackground/>

      
      <ProjectFloatingNav 
        router={router} 
        isDarkMode={isDarkMode} 
        handleShare={() => handleShare(project)}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <ProjectHeroSection
          project={project}
          isDarkMode={isDarkMode}
          heroOpacity={heroOpacity}
          heroScale={heroScale}
        />

        {/* Content Sections */}
        <div
          ref={contentRef}
          className="space-y-12 sm:space-y-16 md:space-y-24  sm:px-3 pb-16 sm:pb-24 md:mt-10 mt-12"
        >
         <div className="text-center">
          <motion.h3 
            className="font-bold md:mb-6 mb-2 lg:text-6xl md:text-5xl text-2xl   leading-tight font-open-sans bg-clip-text text-transparent bg-linear-to-b dark:from-white dark:via-neutral-100 dark:to-neutral-600 from-black via-gray-600 to-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            Project Overview
          </motion.h3>
          <p className="lg:text-2xl md:text-xl  text-para2 dark:text-darkPara2">A comprehensive look at the project objectives, challenges, and outcomes</p>
         </div>
          

          {/* Project Overview */}
          <ProjectOverviewSection
            project={project}
            colors={colors}
            isDarkMode={isDarkMode}
          />

          {/* Key Features */}
          <KeyFeaturesSection project={project} colors={colors} />

          {/* Technology Stack Details */}
          <TechStackSection project={project} colors={colors} />

          {/* Performance Metrics */}
          <PerformanceMetricsSection project={project} />

          {/* Pages Structure */}
          <PagesStructureSection project={project} />

          {/* Visual Showcase */}
          <VisualShowcaseSection
            project={project}
            colors={colors}
            isDarkMode={isDarkMode}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          {/* Challenges Section */}
          <ChallengesSolutionsSection project={project} colors={colors} />

          {/* Learning Outcomes & Future Enhancements */}
          <LearningOutcomesSection project={project} colors={colors} isDarkMode={isDarkMode} />

          {/* Final CTA */}
          <FinalCTASection
            project={project}
            colors={colors}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}