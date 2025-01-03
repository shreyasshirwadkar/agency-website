"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { Link } from "react-scroll";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Navbar visibility
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    setVisible(true); // Ensure navbar is visible on page load

    // Track cursor movement
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full opacity-80"
        style={{
          background:
            "linear-gradient(180deg, rgb(112, 190, 250) 0%, rgb(255, 255, 255) 100%)",
          width: 20,
          height: 20,
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
        }}
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Floating Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              to={navItem.link}
              spy={true}
              activeClass="active"
              className={cn(
                "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300",
                "active:border active:border-white/[0.2] active:rounded-full active:px-4 active:py-2"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              <span
                className={cn(
                  "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px",
                  { hidden: !navItem.isActive } // Ensure the span only appears when the item is active
                )}
              />
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
