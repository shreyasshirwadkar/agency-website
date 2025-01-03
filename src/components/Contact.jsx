"use client";
import React from 'react';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input-form";
import { cn } from "../lib/utils";
import {motion} from "framer-motion"

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};

const Contact = () => {
 
  return (
    <div className='w-full h-full bg-light-black p-10 '>
      <div className='flex flex-col items-center gap-20 md:gap-0 lg:flex-row lg:justify-around w-full mt-20 bg-light-black mb-28'>
        <div>
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
       Let's talk!
      </motion.h1>
        {/* <h1 className='text-4xl sm:text-9xl lg:text-8xl text-gradient mb-14 font-medium '>Let's talk!</h1> */}
        <h2 className='text-xl text-cyan-text'>Office:</h2>
        <p className='text-white'>Keizersgracht 520,<br></br> 1017EK
Amsterdam <br></br>
The Netherlands</p>
        <hr className='mt-7 mb-7 opacity-20'></hr>
        <h2 className='text-xl text-cyan-text'>Email:</h2>
        <h1 className='text-4xl mt-2 text-white'>info@gmail.com</h1>
        <hr className='mt-7 mb-7 opacity-20'></hr>
        <h2 className='text-xl text-cyan-text'>Phone:</h2>
        <h1 className='text-4xl mt-2 text-white'>+91 9666213231</h1>
        </div>
    <div
      className="max-w-md w-full h-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-custom-radial dark:bg-black ">
     
      
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer >
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Leo Messi" type="text" className="bg-zinc-900 text-white"/>
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="leo@example.com" type="email" className="bg-zinc-900 text-white"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+91 7111521832" type="twitterpassword" className="bg-zinc-900 text-white"/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Submit &rarr;
          <BottomGradient />
        </button>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div></div></div>
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full ", className)}>
      {children}
    </div>)
  );
  };

export default Contact;





