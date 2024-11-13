import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Serverseitige Logik hier
  return {
    props: {},
  };
}

interface ServicePageProps {
  // Definiere hier die Eigenschaften, wenn es welche gibt
}

const ServicePage: NextPage<ServicePageProps> = (props) => {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* Weitere Inhalte der Seite */}
    </div>
  );
}

export default ServicePage;