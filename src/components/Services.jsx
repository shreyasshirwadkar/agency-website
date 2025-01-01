import React from 'react';
import AppDevLogo from '../assets/appdev-logo.png';
import WebDevLogo from '../assets/webdev-logo.png';
import CommerceLogo from '../assets/commerce-logo.png';
import MarketingLogo from '../assets/marketing-logo.png';
import SocialmediaLogo from '../assets/socialmedia-logo.png';
import { SimpleCard } from './ui/simple-card';

const Services = () => {
  return (
    <div className='w-full h-full bg-light-black p-10'>
      <h1 className='text-4xl sm:text-6xl lg:text-8xl text-cyan-text font-medium mt-20 mb-14 '>
        What we do
      </h1>
      {/* Flex container for 3 columns and 2 rows */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center place-content-center gap-8 px-4 sm:px-8 lg:px-20'>
        {/* Card 1 */}
        <SimpleCard className="w-full max-w-xs h-full flex flex-col justify-center items-center border-l-0">
          <img src={AppDevLogo} alt="App Development Logo" className="w-16 sm:w-16 h-16 sm:h-20 mb-4" />
          <h1 className='text-cyan-text text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
            App Development
          </h1>
          <div className="text-neutral-200 mt-4 text-center text-sm sm:text-base">
            Tailored mobile applications designed to meet your business needs, ensuring a seamless user experience across all devices.
          </div>
        </SimpleCard>

        {/* Card 2 */}
        <SimpleCard className="w-full max-w-xs h-full flex flex-col justify-center items-center border-l-0">
          <img src={WebDevLogo} alt="Web Development Logo" className="w-16 sm:w-16 h-16 sm:h-20 mb-4" />
          <h1 className='text-cyan-text text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
            Web Development
          </h1>
          <div className="text-neutral-200 mt-4 text-center text-sm sm:text-base">
            Build responsive, dynamic websites that engage users and enhance your online presence with intuitive design and robust functionality.
          </div>
        </SimpleCard>

        {/* Card 3 */}
        <SimpleCard className="w-full max-w-xs h-full flex flex-col justify-center items-center border-l-0">
          <img src={CommerceLogo} alt="UX/UI Design Logo" className="w-16 sm:w-16 h-16 sm:h-20 mb-4" />
          <h1 className='text-cyan-text text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
            E-commerce
          </h1>
          <div className="text-neutral-200 mt-4 text-center text-sm sm:text-base">
            Create scalable and secure e-commerce platforms to sell products or services online with smooth payment integration and customer experience.
          </div>
        </SimpleCard>

        {/* Card 4 */}
        <SimpleCard className="w-full max-w-xs h-full flex flex-col justify-center items-center border-l-0">
          <img src={CommerceLogo} alt="SEO Logo" className="w-16 sm:w-16 h-16 sm:h-20 mb-4" />
          <h1 className='text-cyan-text text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
            SEO Services
          </h1>
          <div className="text-neutral-200 mt-4 text-center text-sm sm:text-base">
            Improve your website’s visibility and ranking on search engines through on-page, off-page SEO, and keyword optimization techniques.
          </div>
        </SimpleCard>

        {/* Card 5 */}
        <SimpleCard className="w-full max-w-xs h-full flex flex-col justify-center items-center border-l-0">
          <img src={MarketingLogo} alt="Digital Marketing Logo" className="w-16 sm:w-16 h-16 sm:h-20 mb-4" />
          <h1 className='text-cyan-text text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
            Digital Marketing
          </h1>
          <div className="text-neutral-200 mt-4 text-center text-sm sm:text-base">
            Tailored mobile applications designed to meet your business needs, ensuring a seamless user experience across all devices.
          </div>
        </SimpleCard>

        {/* Card 6 */}
        <SimpleCard className="w-full max-w-xs h-full flex flex-col justify-center items-center border-l-0">
          <img src={SocialmediaLogo} alt="Social Media Management Logo" className="w-16 sm:w-16 h-16 sm:h-20 mb-4" />
          <h1 className='text-cyan-text text-xl sm:text-2xl lg:text-3xl font-bold text-center'>
            Social Media Management
          </h1>
          <div className="text-neutral-200 mt-4 text-center text-sm sm:text-base">
            Boost your brand’s engagement with custom social media strategies across key platforms.
          </div>
        </SimpleCard>
      </div>
    </div>
  );
};

export default Services;
