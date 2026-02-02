"use client";

import { motion } from "motion/react";
import React from "react";

interface EntranceProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
  viewportMargin?: string;
}

export default function Entrance({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  yOffset = 50,
  viewportMargin = "-50px",
}: EntranceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      className={`${className} opacity-0`}
      style={{ display: 'block', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
