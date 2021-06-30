import {
  css, DefaultTheme, Interpolation, ThemeProps,
} from 'styled-components';

export const media = (
  minWidth: number,
  style: Interpolation<ThemeProps<DefaultTheme>>,
) => (css`
  @media (min-width: ${minWidth / 16}em) {
    ${style}
  }
`);
