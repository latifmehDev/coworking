import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Serverseitige Logik hier
  return {
    props: {},
  };
}

interface ContactPageProps {
  // Definiere hier die Eigenschaften, wenn es welche gibt
}

const ContactPage: NextPage<ContactPageProps> = (props) => {
  return (
    <div>
      <h1>Contacts Page</h1>
      {/* Weitere Inhalte der Seite */}
    </div>
  );
}

export default ContactPage;
