import React from 'react';
import { Image } from '@atoms/image';
import { Heading } from '@atoms/heading';
import { HeadingLevel } from '@type/globals';
import { Props } from './types';
import { StyledLabel, BannerSection, Opacity } from './banner.styled';

export const Banner: React.FC<Props> = ({ data }: Props) => (
  <BannerSection>
    <StyledLabel>
      <Heading level={HeadingLevel.H1}>
        {data.title}
      </Heading>
    </StyledLabel>
    <Image src={data.image} height={144} alt="banner" />
    <Opacity />
  </BannerSection>
);
