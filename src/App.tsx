import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../wagmi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';


const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;