import React, { useEffect, useState } from 'react';
import SearchBar from '../../searchBar/searchBar';
import LoginButton from '../../user/login/login';

const NavigationLink: React.FC<{ href: string; label: string; current?: boolean }> = ({ href, label, current }) => {
  const baseClasses = "block py-2 px-3 rounded md:p-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent";
  const currentClasses = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500";
  const defaultClasses = "text-gray-900 md:hover:text-blue-700 md:dark:hover:text-blue-500";

  return (
    <a
      href={href}
      className={`${baseClasses} ${current ? currentClasses : defaultClasses}`}
      aria-current={current ? 'page' : undefined}
    >
      {label}
    </a>
  );
};

const TopNavbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Überprüfe die Fenstergröße beim Mounten
    handleResize();

    // Abonniere das Resize-Event
    window.addEventListener('resize', handleResize);

    // Bereinige das Event beim Unmounten
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      {!isMobile ? (
        <>
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <div className="flex-1">
              <a href="/" className="flex justify-start items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">flexiwork</span>
              </a>
            </div>

            <div className="flex-1 justify-center hidden w-full md:flex md:w-auto" id="navbar-sticky">
              <ul className="flex justify-center flex-col p-4 md:flex-row md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:md:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="whitespace-nowrap"><NavigationLink href="/workingspaces" label="Working Spaces" current /></li>
                <li className="whitespace-nowrap"><NavigationLink href="/flexiwork" label="flexiwork" /></li>
                <li className="whitespace-nowrap"><NavigationLink href="/help" label="Hilfe" /></li>
              </ul>
            </div>

            <div className="flex-1 flex justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <LoginButton />
            </div>
          </div>

        </>
      ) : (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">flexiwork</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
