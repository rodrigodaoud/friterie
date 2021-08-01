import React from 'react';
import { Image } from '@atoms/image';
import { Row } from '@atoms/row';
import { Logo, Wrapper } from '@molecules/header/header.styled';
import { Props } from './types';
import { TemplateContent, P } from './footer.styled';

export const Footer: React.FC<Props> = ({ footerData }: Props) => (
  <footer>
    <Wrapper>
      <Row>
        <TemplateContent>
          <P>{footerData?.title}</P>
          <Image src="/location.svg" alt="location" />
          <P>{footerData?.info}</P>
        </TemplateContent>
        <Logo className="footer">
          <Image src="/logo-footer.svg" alt="logo-footer" />
        </Logo>
      </Row>
    </Wrapper>
  </footer>
);
