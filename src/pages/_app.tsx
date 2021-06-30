/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@helpers/apolloClient';
import { myTheme } from '@themes/theme';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={myTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);
export default MyApp;
