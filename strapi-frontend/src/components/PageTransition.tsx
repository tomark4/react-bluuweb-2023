"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 12, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
