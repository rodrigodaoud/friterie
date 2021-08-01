import React from 'react';
import Head from 'next/head';
import { Header } from '@molecules/header';
import { Footer } from '@molecules/footer';
import { useQuery } from '@apollo/client';
import { HEADER, HeaderData, HeaderResponse } from '@queries/header';
import { FOOTER, FooterData, FooterResponse } from '@queries/footer';
import { Props } from './types';

export const PageLayout: React.FC<Props> = ({
  children,
}: Props) => {
  const headerData = useQuery<HeaderResponse>(HEADER);
  const footerData = useQuery<FooterResponse>(FOOTER);

  return (
    <>
      <Head>
        <title>
          Friterie :: Site Oficial
        </title>
      </Head>
      <Header headerData={headerData?.data?.header as HeaderData} />
      <main>
        {children}
      </main>
      <Footer footerData={footerData?.data?.footer as FooterData} />
    </>
  );
};
