import React from 'react';
import { LandingPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navigator: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigator;
