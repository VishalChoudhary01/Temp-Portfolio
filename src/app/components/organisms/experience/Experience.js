"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import WorkExperienceNavigation from "./WorkExperienceNavigation";
import WorkExperienceTimeline from "./WorkExperienceTimeline";
import WorkExperienceCard from "./WorkExperienceCard";
import WorkExperienceDots from "./WorkExperienceDots";
import useDarkMode from '@/app/hooks/useDarkMode';
import {timelineData} from '@/app/lib/data/index';
import { Heading } from "@/app/components/atoms/typography/index";

const WorkExperience = () => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  const { isDarkMode } = useDarkMode();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getVisibleItems = useCallback(() => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  }, [windowWidth]);

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);

  const updateMeasurements = useCallback(() => {
    if (innerRef.current && containerRef.current && isMounted) {
      const firstCard = innerRef.current.firstChild;
      if (firstCard) {
        const cardStyle = window.getComputedStyle(firstCard);
        const gap = parseInt(cardStyle.marginRight) || 0;
        const cardWidth = firstCard.offsetWidth + gap;
        setSlideWidth(cardWidth);
      }
    }
  }, [isMounted]);

  const handleDragEnd = (_, info) => {
    if (windowWidth >= 640 || !isMounted) return;
    
    if (info.offset.x > 50 || info.velocity.x > 500) {
      setCurrentIndex(prev => Math.max(0, prev - 1));
    } else if (info.offset.x < -50 || info.velocity.x < -500) {
      setCurrentIndex(prev => 
        Math.min(timelineData.length - getVisibleItems(), prev + 1)
      );
    }
  };

  const goToNext = () => {
    const visibleItems = getVisibleItems();
    setCurrentIndex(prev => 
      Math.min(prev + 1, timelineData.length - visibleItems)
    );
  };

  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (isMounted) {
      updateMeasurements();
    }
  }, [windowWidth, updateMeasurements, isMounted]);

  useEffect(() => {
    if (isMounted) {
      const visibleItems = getVisibleItems();
      if (currentIndex > timelineData.length - visibleItems) {
        setCurrentIndex(Math.max(0, timelineData.length - visibleItems));
      }
    }
  }, [windowWidth, currentIndex, getVisibleItems, isMounted]);

  const visibleItems = getVisibleItems();
  const shouldShowLeftArrow = currentIndex > 0;
  const shouldShowRightArrow = currentIndex < timelineData.length - visibleItems;
  const translateX = -currentIndex * slideWidth;

  return (
    <section className="min-h-screen py-20 px-4 bg-contextBG dark:bg-contextDarkBG">
      <div className="max-w-7xl mx-auto">
        <Heading heading="Work Experience" />
        
        <div className="relative">
          <WorkExperienceNavigation
            shouldShowLeftArrow={shouldShowLeftArrow}
            shouldShowRightArrow={shouldShowRightArrow}
            goToPrev={goToPrev}
            goToNext={goToNext}
          />

          <div className="pl-4 lg:pl-8">
            <WorkExperienceTimeline
              containerRef={containerRef}
              innerRef={innerRef}
              translateX={translateX}
              windowWidth={windowWidth}
              handleDragEnd={handleDragEnd}
            >
              {timelineData.map((item, index) => (
                <WorkExperienceCard
                  key={index}
                  index={index}
                  item={item}
                  isDarkMode={isDarkMode}
                />
              ))}
            </WorkExperienceTimeline>
          </div>

          {windowWidth < 640 && (
            <WorkExperienceDots
              timelineData={timelineData}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;