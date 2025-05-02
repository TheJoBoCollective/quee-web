import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TiltedTextProps {
  text: string;
  color: string;
  rotation: number;
  className?: string;
}

export function TiltedText({
  text,
  color,
  rotation,
  className,
}: TiltedTextProps) {
  return (
    <motion.span
      className={cn(
        "inline-block px-6 py-3 mx-1 rounded-3xl font-medium",
        color,
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        display: "inline-block",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10, }}
    >
      {text}
    </motion.span>
  );
}

export default TiltedText;