"use client";

import React from 'react';
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import {motion} from "framer-motion"
const Review = () => {
  return (
    <div className='w-full h-full bg-light-black p-10'>
     <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-center lg:text-left text-4xl sm:text-9xl lg:text-8xl text-gradient font-medium mt-20 mb-14 "
      >
        Reviews
      </motion.h1>
      {/* <h1 className='text-4xl md:text-left text-center sm:text-9xl lg:text-8xl  text-gradient font-medium mt-20 mb-14'> Reviews</h1> */}
       <div
      className=" rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
    <div
      className="mb-20 rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
    </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Highly recommended Halo's AI consultancy for any data-intensive business.",
    name: "Michael Anderson",
    title: "CEO - Verdant Inc.",
    image: "https://framerusercontent.com/images/UHaTMAZIlXvtZiNNh9Hd8wZuM.png?scale-down-to=512",
  },
  {
    quote: "Their insights and strategies significantly improved our decision-making process.",
    name: "Sarah Thompson",
    title: "CTO - NovaTech",
    image: "https://framerusercontent.com/images/0Y5Ey15HuRUuXEEeSk5a8pHQ.png?scale-down-to=512",
  },
  {
    quote: "An excellent partner for implementing AI-driven solutions.",
    name: "John Reynolds",
    title: "Director - TechFusion",
    image: "https://framerusercontent.com/images/UZi1VqJKleg7uGRJM5fkDDQTqmg.png?scale-down-to=512",
  },
  {
    quote: "The team was professional and delivered exceptional results on time.",
    name: "Emma Carter",
    title: "Project Manager - SkyHigh Solutions",
    image: "https://framerusercontent.com/images/UHaTMAZIlXvtZiNNh9Hd8wZuM.png?scale-down-to=512",
  },
  
];


export default Review;
