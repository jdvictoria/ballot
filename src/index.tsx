import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <MetaMaskUIProvider sdkOptions={{
          dappMetadata: {
              name: "Web3 Voting System",
          }
      }}>
          <App />
      </MetaMaskUIProvider>
  </React.StrictMode>
);
