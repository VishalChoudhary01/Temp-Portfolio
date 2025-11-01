import React from "react";

const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div className="absolute top-10 right-10 w-40 h-40 bg-linear-to-br from-btn-modern-from to-btn-modern-to rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-linear-to-tr from-dark-btn-modern-from to-btn-modern-to rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundDecoration;