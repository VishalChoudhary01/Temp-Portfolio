"use client";

import React,{useState,useRef,useCallback,useEffect} from "react";
import {DesktopNavigationButtons,DesktopSlideItem} from './Desktop/index';
import {MobileBackgroundImage,MobileContent} from './Mobile/index';
import { useRouter } from "next/navigation";
import { slideData } from "@/app/lib/data";




const CarouselProjects = () => {
  const [items, setItems] = useState(slideData);
  const [previewCount, setPreviewCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const router =useRouter()


  const nextSlide = useCallback(() => {
    setItems((prev) => {
      const newArray = [...prev];
      const first = newArray.shift();
      return [...newArray, first];
    });
  }, []);

  const prevSlide = useCallback(() => {
    setItems((prev) => {
      const newArray = [...prev];
      const last = newArray.pop();
      return [last, ...newArray];
    });
  }, []);

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);
  }, [nextSlide]);

  const resetAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  }, [startAutoSlide]);

  const handleNextSlide = () => {
    nextSlide();
    resetAutoSlide();
  };

  const handlePrevSlide = () => {
    prevSlide();
    resetAutoSlide();
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 768) {
        setPreviewCount(0);
      } else if (width < 1024) {
        setPreviewCount(2);
      } else {
        setPreviewCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);

   const handleSeeMore = (projectId) => {
    router.push(`/project/${projectId}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-screen h-screen  overflow-hidden relative ">
        <div className="absolute bottom-48    left-0 w-full h-full ">
          {isMobile && (
            <MobileBackgroundImage 
              image={items[0].image} 
              name={items[0].name}
              id={items[0].id}
            />
          )}
          
          <div className="relative w-full h-[60vw]">

            {items.slice(0, previewCount + 1).map((item, index) => (
              <DesktopSlideItem
                key={item.id}
                item={item}
                index={index}
                isMain={index === 0}
                isMobile={isMobile}
                previewCount={previewCount}
                seeMorePage={handleSeeMore}
              />
            ))}
          </div>

          {/* Mobile content block - minimal gradient at bottom */}
          {isMobile && (
            <MobileContent 
              item={items[0]} 
              onPrev={handlePrevSlide}
              onNext={handleNextSlide}
              handleSeeMore={handleSeeMore}
            />
          )}

          {/* Desktop Navigation buttons */}
          {!isMobile && (
            <DesktopNavigationButtons 
              onPrev={handlePrevSlide} 
              onNext={handleNextSlide} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CarouselProjects;