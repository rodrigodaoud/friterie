/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@helpers/apolloClient';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);
export default MyApp;
