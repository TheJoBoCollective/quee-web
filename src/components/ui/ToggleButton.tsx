"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  options: string[];
  defaultSelected?: number;
  onChange?: (selectedIndex: number) => void;
  className?: string;
}

export default function ToggleButton({
  options,
  defaultSelected = 0,
  onChange,
  className,
}: ToggleButtonProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  return (
    <div
      className={cn(
        "flex items-center p-1 bg-[#D9E8FF] rounded-full w-fit py-2 px-2",
        className
      )}
    >
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(index)}
          className={cn(
            "px-6 py-3 text-md md:text-2xl cursor-pointer font-medium text-[#1E1E1E] transition-all duration-200 rounded-full",
            selectedIndex === index ? "bg-[#ACCDFF]" : "bg-transparent"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
