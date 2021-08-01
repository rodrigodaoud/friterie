import { Row } from '@atoms/row';
import React from 'react';
import { TemplateContent } from './singleColumnRow.styled';

interface Props {
  children: React.ReactNode;
  large: boolean;
}

export const SingleColumnRow: React.FC<Props> = ({
  children,
  large,
}: Props) => (
  <Row>
    <TemplateContent large={large}>
      {children}
    </TemplateContent>
  </Row>
);
