import React from 'react'; // <-- Make sure this exists
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;