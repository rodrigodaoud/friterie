import { Color, HeadingLevel } from '@type/globals';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    header: {
      backgroundColor: Color;
      color: Color;
    },
    heading: {
      [HeadingLevel.H1]: Heading,
      [HeadingLevel.H2]: Heading,
      [HeadingLevel.H3]: Heading,
      [HeadingLevel.H4]: Heading,
      [HeadingLevel.H5]: Heading,
    },
    row: {
      backgroundColor: Color,
    },
    banner: {
      color: Color,
      fontSize: FontSize,
    },
    paragraph: {
      color: TextColor,
    }
  }
}
