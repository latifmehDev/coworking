'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const BottomNavbar: React.FC = () => {
  // State, um den Zustand der Navigationsleiste zu verwalten
  const [isOpen, setIsOpen] = useState(false);

  // Funktion, um den Zustand zu toggeln
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleNavbar} className="fixed inline-flex items-center justify-center z-50 w-16 h-16 bg-white rounded-full bottom-4 left-1/2 transform -translate-x-1/2 dark:bg-gray-700">
        <svg className="w-6 h-6 m-2 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
      <div className="relative">
        <div className={`fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 ${isOpen ? '' : 'hidden'}`}>
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            {/* Button 1: Home */}
            <ButtonWithTooltipLeft
              tooltipId="tooltip-home"
              tooltipText="Home"
              svgPath="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              href='/'
            />

            {/* Button 2: Wallet */}
            <ButtonWithTooltipMiddle
              tooltipId="tooltip-wallet"
              tooltipText="Wallet"
              svgPath="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4ZM19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"
              href='/'
            />

            {/* Button 3: New Item */}
            <div className="flex items-center justify-center">

            </div>
            <Tooltip tooltipId="tooltip-new" tooltipText="Create new item" />

            {/* Button 4: Settings */}
            <ButtonWithTooltipMiddle
              tooltipId="tooltip-settings"
              tooltipText="Settings"
              svgPath="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              href='/'
            />

            {/* Button 5: Profile */}
            <ButtonWithTooltipRight
              tooltipId="tooltip-profile"
              tooltipText="Profile"
              svgPath="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              href='/login'
            />
          </div>
        </div>
        {/* Toggle-Button unterhalb der Navigationsleiste */}
        <button onClick={toggleNavbar} className="fixed inline-flex items-center justify-center z-50 w-16 h-16 bg-white rounded-full bottom-4 left-1/2 transform -translate-x-1/2 dark:bg-gray-700">
          <svg className="w-6 h-6 m-2 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
    </>
  );
};

interface ButtonWithTooltipProps {
  tooltipId: string;
  tooltipText: string;
  svgPath: string;
}

const ButtonWithTooltipLeft: React.FC<ButtonWithTooltipProps> = ({ tooltipId, tooltipText, svgPath, href }) => {
  return (
    <>
      <Link href={href} legacyBehavior>
        <button data-tooltip-target={tooltipId} type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 justify-content: center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d={svgPath} />
          </svg>
          <span className="sr-only">{tooltipText}</span>
        </button>
      </Link>
      <Tooltip tooltipId={tooltipId} tooltipText={tooltipText} />
    </>
  );
};

const ButtonWithTooltipMiddle: React.FC<ButtonWithTooltipProps> = ({ tooltipId, tooltipText, svgPath, href }) => {
  return (
    <>
      <Link href={href} legacyBehavior>
        <button data-tooltip-target={tooltipId} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d={svgPath} />
          </svg>
          <span className="sr-only">{tooltipText}</span>
        </button>
      </Link>
      <Tooltip tooltipId={tooltipId} tooltipText={tooltipText} />
    </>
  );
};

const ButtonWithTooltipRight: React.FC<ButtonWithTooltipProps> = ({ tooltipId, tooltipText, svgPath, href }) => {
  return (
    <>
      <Link href={href} legacyBehavior>
        <button data-tooltip-target={tooltipId} type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d={svgPath} />
          </svg>
          <span className="sr-only">{tooltipText}</span>
        </button>
      </Link>
      <Tooltip tooltipId={tooltipId} tooltipText={tooltipText} />
    </>
  );
};


interface TooltipProps {
  tooltipId: string;
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipId, tooltipText }) => {
  return (
    <div id={tooltipId} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      {tooltipText}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default BottomNavbar;