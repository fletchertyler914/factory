import { SolanaProvider } from '@factory/providers';
import { Layout } from '@factory/ui';
import { AppProps } from 'next/app';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <SolanaProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SolanaProvider>
);

export default CustomApp;
