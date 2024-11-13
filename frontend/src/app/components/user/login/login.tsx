'use client';

import React, { useState, useEffect } from 'react';
import { PublicClientApplication, PopupRequest, Configuration } from '@azure/msal-browser';
import './login.css';

// Definieren Sie die Konfiguration mit expliziten Typen
const msalConfig: Configuration = {
  auth: {
    clientId: 'aeda72ec-c5df-478e-9a70-4d93e64d238f', // Ersetzen durch Client-ID
    authority: 'https://projektfw.b2clogin.com/projektfw.onmicrosoft.com/B2C_1_signupsignin1', // Ersetzen durch B2C-Policy
    redirectUri: 'https://jwt.ms',
  },
};

const LoginButton: React.FC = () => {
  // Initialisiere MSAL-Instanz innerhalb der Komponente, um sicherzustellen, dass sie bereit ist
  const [msalInstance, setMsalInstance] = useState<PublicClientApplication>();

  useEffect(() => {
    setMsalInstance(new PublicClientApplication(msalConfig));
  }, []);

  const handleLogin = async () => {
    if (!msalInstance) {
      console.error('MSAL-Instanz ist nicht initialisiert.');
      return;
    }

    const loginRequest: PopupRequest = {
      scopes: ['openid', 'profile'],
    };

    try {
      await msalInstance.loginPopup(loginRequest);
      console.log('Login erfolgreich');
    } catch (error) {
      console.error(error);
    }
  };

  return <button className="inline-flex items-center justify-center group" onClick={handleLogin} style={{ padding: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
           <svg className="w-8 h-8 text-gray-500 dark:text-gray-400 login-color svg-hover-enlarge" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" style={{ transition: 'transform 0.3s ease', display: 'block' }}>
             <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
           </svg>
         </button>;

};

export default LoginButton;
