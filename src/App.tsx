import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { MoodMenu } from './pages/MoodMenu';
import { Packages } from './pages/Packages';
import { PackageDetails } from './pages/PackageDetails';
import { Payment } from './pages/Payment';
import { About } from './pages/About';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MoodMenu />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:packageId" element={<PackageDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
