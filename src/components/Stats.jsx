import React from 'react';
import { SimpleCard } from "../components/ui/simple-card";

const Stats = () => {
  return (
    <div className='w-full h-full bg-light-black p-10'>
      <h1 className='text-4xl sm:text-9xl lg:text-8xl text-gradient mb-14 font-medium mt-20 text-center md:text-left'> Our statistics</h1>
      {/* Flex container for responsive grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
        {/* Card 1 */}
        <SimpleCard className="w-full h-full flex flex-col justify-center items-start border-t-0 ">
          <h1 className='text-white text-3xl font-bold relative z-20 bg-transparent'> Projects completed </h1>
          <h1 className='text-cyan-text text-7xl font-bold relative z-20 mt-10 bg-transparent'> 93+ </h1>
          <hr className='w-64 mt-10'></hr>
          <div className="text-neutral-200 mt-4 relative z-20 bg-transparent">
            We've successfully completed 93 top-tier projects.
          </div>
        </SimpleCard>

        {/* Card 2 */}
        <SimpleCard className="w-full h-full flex flex-col justify-center items-start border-t-0">
          <h1 className='text-white text-3xl font-bold relative z-20 bg-transparent'> Satisfied customers </h1>
          <h1 className='text-cyan-text text-7xl font-bold relative z-20 mt-10 bg-transparent'> 100% </h1>
          <hr className='w-64 mt-10'></hr>
          <div className="text-neutral-200 mt-4 relative z-20 bg-transparent">
            We ensure a 100% satisfaction level for our clients.
          </div>
        </SimpleCard>

        {/* Card 3 */}
        <SimpleCard className="w-full h-full flex flex-col justify-center items-start border-t-0 ">
          <h1 className='text-white text-3xl font-bold relative z-20 bg-transparent'> Hours saved per day </h1>
          <h1 className='text-cyan-text text-7xl font-bold relative z-20 mt-10 bg-transparent'> 3h </h1>
          <hr className='w-64 mt-10'></hr>
          <div className="text-neutral-200 mt-4 relative z-20 bg-transparent">
            Our solutions save our clients an average of 3 hours of work per day.
          </div>
        </SimpleCard>

        {/* Card 4 */}
        <SimpleCard className="w-full h-full flex flex-col justify-center items-start border-t-0">
          <h1 className='text-white text-3xl font-bold relative z-20 bg-transparent'> Cost saved per month </h1>
          <h1 className='text-cyan-text text-7xl font-bold relative z-20 mt-10 bg-transparent'> 80k </h1>
          <hr className='w-64 mt-10'></hr>
          <div className="text-neutral-200 mt-4 relative z-20 bg-transparent">
            Our solutions save our clients an average of $80.000 per month.
          </div>
        </SimpleCard>
      </div>
    </div>
  );
}

export default Stats;
