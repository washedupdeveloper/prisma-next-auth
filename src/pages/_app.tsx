import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>    </Provider>
  );
};

export default App;
