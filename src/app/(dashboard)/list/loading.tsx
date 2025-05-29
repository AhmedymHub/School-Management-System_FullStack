"use client";

import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
