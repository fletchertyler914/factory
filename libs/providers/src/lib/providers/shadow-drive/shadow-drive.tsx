import { useEffect } from 'react';
import { ShdwDrive } from '@shadow-drive/sdk';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';

export interface ShadowDriveProviderProps {
  connection: Connection;
  wallet: AnchorWallet;
  children: React.ReactNode;
}

export const ShadowDriveProvider = ({
  connection,
  wallet,
  children,
}: ShadowDriveProviderProps) => {
  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const drive = await new ShdwDrive(
          connection,
          wallet as AnchorWallet
        ).init();

        const accounts = await drive.getStorageAccounts('v2');

        if (accounts.length === 0) {
          const storage = await drive.createStorageAccount(
            'my-test-storage',
            '1MB',
            'v2'
          );

          console.log('storage', storage);
        }
        console.log('Drive: ', drive, accounts);
      }
    })();
  }, [wallet?.publicKey, connection, wallet]);

  return <div>{children}</div>;
};

export default ShadowDriveProvider;
