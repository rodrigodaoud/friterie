import React from 'react';
import Link from 'next/link';
import { Row } from '@atoms/row';
import { Image } from '@atoms/image';
import {
  LinkSection,
  Logo,
  TemplateContent,
  Wrapper,
} from './header.styled';
import { Props } from './types';

export const Header: React.FC<Props> = ({ headerData }: Props) => (
  <Wrapper>
    <Row>
      <a href="/">
        <Logo>
          <Image src={headerData?.logo.url} alt="logo" />
        </Logo>
      </a>
      <TemplateContent>
        <LinkSection>
          {headerData?.itemsCollection.items.map((item) => (
            <Link
              href={item.externalLink ? item.to : `/${item.to}`}
              key={Math.random()}
            >
              {item.title}

            </Link>
          ))}
        </LinkSection>
        <div className="instagram">
          Siga nosso instagram
          <span role="img" aria-label="siga">📸</span>
        </div>
      </TemplateContent>
    </Row>
  </Wrapper>
);
