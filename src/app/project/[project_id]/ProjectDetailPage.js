// Updated ProjectDetailPage with better mobile spacing
"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { slideData } from "@/app/lib/data/index";
import GridBackground from "@/app/components/molecules/animation-background/ShaderBackground";
import ProjectFloatingNav from "@/app/components/organisms/projectDetail/ProjectNavigation";
import useDarkMode from "@/app/hooks/useDarkMode";
import DarkModeToggle from '@/app/components/atoms/theme-toggle/DarkModeToggle'

import {
  ProjectHeroSection,
  ProjectOverviewSection,
  KeyFeaturesSection,
  TechStackSection,
  VisualShowcaseSection,
  ChallengesSolutionsSection,
  FinalCTASection,
  ProjectNotFoundState,
} from "@/app/components/organisms/projectDetail";
import {
  getProjectColors,
  handleShare,
} from "@/app/components/organisms/projectDetail/utils";

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

      {/* Gradient Overlay - Only in light mode */}
      {!isDarkMode && (
        <div className="fixed inset-0 -z-5 bg-gradient-to-br from-transparent  to-orange-50/30" />
      )}
      
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
          className="space-y-12 sm:space-y-16 md:space-y-24 px-4 sm:px-6 pb-16 sm:pb-24 md:mt-10 mt-12"
        >
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