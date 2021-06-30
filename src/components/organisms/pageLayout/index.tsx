import React from 'react';
import Head from 'next/head';
import { Header } from '@molecules/header';
import { useQuery } from '@apollo/client';
import { HEADER, HeaderResponse } from '@queries/header';
import { Props } from './types';

export const PageLayout: React.FC<Props> = ({
  children,
}: Props) => {
  const { data } = useQuery<HeaderResponse>(HEADER);

  return (
    <>
      <Head>
        <title>
          Friterie :: Site Oficial
        </title>
      </Head>
      <Header data={data?.header} />
      <main>
        {children}
      </main>
    </>
  );
};
