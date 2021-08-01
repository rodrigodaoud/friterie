import React from 'react';
import { useQuery } from '@apollo/client';
import { Image } from '@atoms/image';
import { Banner } from '@molecules/banner';
import { PageLayout } from '@organisms/pageLayout';
import { QuemSomosResponse, QUEM_SOMOS } from '@queries/quemSomos';
import { Heading } from '@atoms/heading';
import { SingleColumnRow } from '@molecules/singleColumnRow';
import { HeadingLevel } from '@type/globals';

export default function QuemSomos() {
  const { data } = useQuery<QuemSomosResponse>(QUEM_SOMOS);
  const bannerData = {
    title: data?.quemSomos.title,
    image: data?.quemSomos.image.url,
  };

  return (
    <PageLayout>
      <Banner data={bannerData} />
      <Image src="/pattern.svg" alt="pattern" />
      <SingleColumnRow large>
        <Heading level={HeadingLevel.H2}>{data?.quemSomos.text}</Heading>
      </SingleColumnRow>
    </PageLayout>
  );
}
