import React from 'react';
import { Row } from '@atoms/row';
import { Image } from '@atoms/image';
import {
  LinkSection,
  Logo,
  TemplateContent,
  Wrapper,
} from './header.styled';
import { Props } from './types';

export const Header: React.FC<Props> = ({ data }: Props) => (
  <Wrapper>
    <Row>
      <Logo>
        <Image src={data?.logo.url} alt="logo" />
      </Logo>
      <TemplateContent>
        <LinkSection>
          {data?.itemsCollection.items.map((item, index) => (
            <div
              className={`link-${index + 1}`}
              key={Math.random()}
            >
              {item.title}

            </div>
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
