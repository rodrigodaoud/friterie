import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Heading } from '@atoms/heading';
import { Image } from '@atoms/image';
import { P } from '@atoms/paragraph';
import { Row } from '@atoms/row';
import { HeadingLevel } from '@type/globals';
import {
  TemplateContent,
  ImageWrapper,
  MenuWrapper,
  CollapseWrapper,
  InfoWrapper,
} from './cardapio.styled';

interface Props {
  data: any;
}

export const CardapioItems: React.FC<Props> = ({ data }: Props) => (
  <Row>
    <TemplateContent>
      <Accordion defaultActiveKey="0">
        {data?.map((category: any, index: number) => (
          <>
            <Accordion.Toggle eventKey={index.toString()}>
              <Heading level={HeadingLevel.H2}>{category.title}</Heading>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <CollapseWrapper>
                {category.itemCollection.items.map((item: any) => (
                  <MenuWrapper key={Math.random()}>
                    <ImageWrapper>
                      <Image src={item.image.url} alt="cardapio-item" />
                    </ImageWrapper>
                    <InfoWrapper>
                      <Heading level={HeadingLevel.H3}>{item.title}</Heading>
                      <P>{item.description}</P>
                      <Heading level={HeadingLevel.H3}>
                        R$
                        {' '}
                        {item.price}
                      </Heading>
                    </InfoWrapper>
                  </MenuWrapper>
                ))}
              </CollapseWrapper>
            </Accordion.Collapse>
          </>
        ))}
      </Accordion>
    </TemplateContent>
  </Row>
);
