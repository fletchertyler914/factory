import { /*ShadowDriveProvider,*/ SolanaProvider } from '@factory/providers';
import { Layout } from '@factory/ui';
// import { useConnection } from '@solana/wallet-adapter-react';
import { AppProps } from 'next/app';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  // const { connection } = useConnection();

  return (
    <SolanaProvider>
      {/* <ShadowDriveProvider connection={connection} wallet={wallet}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </ShadowDriveProvider> */}
    </SolanaProvider>
  );
};

export default CustomApp;
