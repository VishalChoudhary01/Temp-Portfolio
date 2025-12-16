"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaExpand, FaTimes } from "react-icons/fa";
import { useState } from "react";

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function VisualShowcaseSection({
  project,
  colors,
  isDarkMode,
  selectedImage,
  setSelectedImage,
}) {
  // If no bentoGrid, create one from gallery
  const visualItems = project.bentoGrid || (project.gallery ? project.gallery.map((img, index) => ({
    id: index + 1,
    title: `Screenshot ${index + 1}`,
    description: "Project screenshot",
    image: img,
    gridPosition: getGridPosition(index),
    category: "screenshot",
    size: getSize(index)
  })) : []);

  function getGridPosition(index) {
    const positions = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
    ];
    return positions[index % positions.length];
  }

  function getSize(index) {
    const sizes = ["large", "medium", "medium", "tall", "medium", "wide", "medium"];
    return sizes[index % sizes.length];
  }

  if (!visualItems || visualItems.length === 0) {
    return null;
  }

  return (
    <>
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 mb-4">
            <FaEye className={`text-2xl ${colors.text}`} />
            <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text}`}>
              Project Screenshots
            </h2>
          </div>
          <p className={`max-w-2xl mx-auto text-lg ${colors.textSecondary}`}>
            Interactive gallery showcasing the project's design and features
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[250px]"
          variants={staggerContainer}
        >
          {visualItems.slice(0, 6).map((item) => (
            <motion.div
              key={item.id}
              className={`relative group cursor-pointer rounded-xl overflow-hidden border backdrop-blur-lg ${
                isDarkMode
                  ? "bg-gray-900/40 border-gray-800/60"
                  : "bg-white/70 border-gray-300/50"
              } ${item.gridPosition || ""}`}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item.image)}
            >
              {typeof item.image === 'string' ? (
                // For external URLs
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                // For imported image objects
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>

              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`px-2 py-1 rounded-md text-xs font-medium backdrop-blur-md border ${colors.accent} text-white`}
                >
                  {item.category}
                </div>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 rounded-full backdrop-blur-md bg-black/30 border border-white/20">
                  <FaExpand className="text-white text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {typeof selectedImage === 'string' ? (
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="object-contain max-h-[85vh] rounded-lg shadow-2xl"
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  width={1000}
                  height={600}
                  quality={90}
                  className="object-contain max-h-[85vh] rounded-lg shadow-2xl"
                />
              )}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 transition bg-black/70 rounded-full p-2 backdrop-blur-md border border-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}