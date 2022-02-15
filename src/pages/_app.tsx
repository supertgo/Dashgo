import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Head from 'next/head';

import { QueryClient, QueryClientProvider } from 'react-query';
import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';
import { makeServer } from 'services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Head>
            <title>Dashgo</title>
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
