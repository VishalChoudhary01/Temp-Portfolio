"use client";
import React, { useEffect, useRef, useState } from "react";
import TickerItem from "./TickerItem";
import {techTickerItems} from '@/app/lib/data/index'

const TRIPLET_COPIES = 3;

const TickerTrack = () => {
  const scrollerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const duplicatedTechStack = Array(TRIPLET_COPIES).fill(techTickerItems).flat();

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const scroller = scrollerRef.current;
    if (!scroller || !scroller.firstChild) return;

    const cardStyle = window.getComputedStyle(scroller.firstChild);
    const cardWidth =
      scroller.firstChild.offsetWidth +
      parseFloat(cardStyle.marginLeft) +
      parseFloat(cardStyle.marginRight);

    // FIX: Changed techStack to techTickerItems
    scroller.style.width = `${cardWidth * techTickerItems.length * TRIPLET_COPIES}px`;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.4;
    // FIX: Changed techStack to techTickerItems
    const singleSetWidth = cardWidth * techTickerItems.length;

    const animate = () => {
      scrollPosition -= speed;
      if (Math.abs(scrollPosition) >= singleSetWidth) {
        scrollPosition += singleSetWidth;
      }
      scroller.style.transform = `translateX(${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationId);
    };
  }, [isMounted]);

  return (
    <div
      ref={scrollerRef}
      className="flex"
      style={!isMounted ? { transform: "translateX(0)" } : {}}
    >
      {duplicatedTechStack.map((tech, index) => (
        <TickerItem
          key={`${tech.name}-${index}`}
          tech={tech}
          index={index}
          // FIX: Changed techStack to techTickerItems
          techStackLength={techTickerItems.length}
          isMounted={isMounted}
        />
      ))}
    </div>
  );
};

export default TickerTrack;