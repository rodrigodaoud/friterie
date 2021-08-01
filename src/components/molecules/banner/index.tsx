import React, { useEffect, useState } from 'react';
import { Image } from '@atoms/image';
import { Heading } from '@atoms/heading';
import { HeadingLevel } from '@type/globals';
import { Props } from './types';
import { StyledLabel, BannerSection, Opacity } from './banner.styled';

export const Banner: React.FC<Props> = ({ data }: Props) => {
  const [pathName, setPathName] = useState('');
  const HeadingTemplate = (
    <Heading level={HeadingLevel.H1}>
      {data.title}
    </Heading>
  );

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <BannerSection>
      <StyledLabel>
        {pathName === '/' ? (
          <a href="https://www.goomer.app/friterie">{HeadingTemplate}</a>
        ) : HeadingTemplate}
      </StyledLabel>
      <Image src={data.image} height={144} alt="banner" />
      <Opacity />
    </BannerSection>
  );
};
