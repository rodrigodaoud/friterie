import React from 'react';
import { useQuery } from '@apollo/client';
import { Image } from '@atoms/image';
import { ImageSlider } from '@molecules/imageSlider';
import { Banner } from '@molecules/banner';
import { PageLayout } from '@organisms/pageLayout';
import { HOMEPAGE, HomepageResponse } from '@queries/homepage';

export default function Home() {
  const { data } = useQuery<HomepageResponse>(HOMEPAGE);
  const bannerData = {
    title: data?.homepage.deliveryLabel,
    image: data?.homepage.deliveryBanner.url,
  };

  return (
    <PageLayout>
      <ImageSlider images={data?.homepage.slidesCollection} />
      <Banner data={bannerData} />
      <Image src="/pattern.svg" alt="pattern" />
    </PageLayout>
  );
}
