import {
  Color, FontFamily, FontSize, FontWeight, HeadingLevel, TextColor,
} from '@type/globals';
import { DefaultTheme } from 'styled-components';

export const myTheme: DefaultTheme = {
  header: {
    backgroundColor: Color.DEFAULT,
    color: Color.PRIMARY,
    hover: {
      color: Color.SECONDARY,
    },
  },
  heading: {
    [HeadingLevel.H1]: {
      color: TextColor.WHITE,
      fontFamily: FontFamily.PRIMARY,
      fontSize: FontSize.H1,
      fontWeight: FontWeight.BOLD,
    },
    [HeadingLevel.H2]: {
      color: TextColor.PRIMARY,
      fontFamily: FontFamily.PRIMARY,
      fontSize: FontSize.H2,
      fontWeight: FontWeight.SEMIBOLD,
    },
    [HeadingLevel.H3]: {
      color: TextColor.PRIMARY,
      fontFamily: FontFamily.PRIMARY,
      fontSize: FontSize.H3,
      fontWeight: FontWeight.SEMIBOLD,
    },
    [HeadingLevel.H4]: {
      color: TextColor.PRIMARY,
      fontFamily: FontFamily.PRIMARY,
      fontSize: FontSize.H4,
      fontWeight: FontWeight.SEMIBOLD,
    },
    [HeadingLevel.H5]: {
      color: TextColor.DEFAULT,
      fontFamily: FontFamily.PRIMARY,
      fontSize: FontSize.H5,
      fontWeight: FontWeight.SEMIBOLD,
    },
  },
  row: {
    backgroundColor: Color.TRANSPARENT,
  },
  banner: {
    color: Color.WHITE,
    hoverColor: Color.SECONDARY,
    fontSize: FontSize.H1,
  },
  cardapio: {
    infoTitle: {
      fontSize: FontSize.H1,
      color: Color.DEFAULT,
    },
  },
  paragraph: {
    color: TextColor.DEFAULT,
  },
  centeredText: {
    title: {
      fontSize: FontSize.H1,
    },
    subtitle: {
      fontSize: FontSize.H4,
    },
  },
  footer: {
    color: TextColor.LIGHT,
    fontSize: FontSize.SMALL,
  },
};
