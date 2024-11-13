'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import TopNavbar from '../topnavbar/topNavbar';
import BottomNavbar from '../bottomNavbar/bottomNavbar';

const Navbar: React.FC = () => {
  // Setze den initialen State basierend auf der Fenstergröße
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
    <nav className={styles.navbar}>
      {isMobile ? (
        // Mobile Ansicht: Zeige BottomNavbar
        <BottomNavbar />
      ) : (
        // Desktop Ansicht: Zeige TopNavbar
        <div></div>
      )}
      <TopNavbar />
    </nav>
  );
};

export default Navbar;
