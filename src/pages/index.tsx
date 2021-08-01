import React from 'react';
import { useQuery } from '@apollo/client';
import { Image } from '@atoms/image';
import { ImageSlider } from '@molecules/imageSlider';
import { Banner } from '@molecules/banner';
import { PageLayout } from '@organisms/pageLayout';
import {
  HOMEPAGE, HomepageResponse, HomepageSlides,
} from '@queries/homepage';
import { Heading } from '@atoms/heading';
import { HeadingLevel } from '@type/globals';
import { P } from '@atoms/paragraph';
import { SingleColumnRow } from '@molecules/singleColumnRow';

export default function Home() {
  const { data } = useQuery<HomepageResponse>(HOMEPAGE);
  const bannerData = {
    title: data?.homepage.deliveryLabel,
    image: data?.homepage.deliveryBanner.url,
  };

  return (
    <PageLayout>
      <ImageSlider images={data?.homepage.slidesCollection as HomepageSlides} />
      <Banner data={bannerData} />
      <Image src="/pattern.svg" alt="pattern" />
      <SingleColumnRow large={false}>
        <a href="/cardapio">
          <Heading level={HeadingLevel.H2}>{data?.homepage.informationTitle}</Heading>
          <P>{data?.homepage.informationSubtitle}</P>
        </a>
      </SingleColumnRow>
    </PageLayout>
  );
}
