import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Chatbot } from '../ui/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
