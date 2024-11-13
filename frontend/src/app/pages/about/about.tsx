import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Serverseitige Logik hier
  return {
    props: {},
  };
}

interface AboutPageProps {
  // Definiere hier die Eigenschaften, wenn es welche gibt
}

const AboutPage: NextPage<AboutPageProps> = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      {/* Weitere Inhalte der Seite */}
    </div>
  );
}

export default AboutPage;
