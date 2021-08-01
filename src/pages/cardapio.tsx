import React from 'react';
import { useQuery } from '@apollo/client';
import { Image } from '@atoms/image';
import { Banner } from '@molecules/banner';
import { CardapioItems } from '@molecules/cardapio';
import { PageLayout } from '@organisms/pageLayout';
import { CARDAPIO, CardapioResponse } from '@queries/cardapio';

export default function Cardapio() {
  const { data } = useQuery<CardapioResponse>(CARDAPIO);
  const bannerData = {
    title: data?.cardapio.title,
    image: data?.cardapio.image.url,
  };

  return (
    <PageLayout>
      <Banner data={bannerData} />
      <Image src="/pattern.svg" alt="pattern" />
      <CardapioItems data={data?.cardapio.categoryCollection.items} />
    </PageLayout>
  );
}
