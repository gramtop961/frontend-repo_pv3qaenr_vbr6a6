import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero3D from './components/Hero3D.jsx';
import AboutSection from './components/AboutSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <NavBar />
      <Hero3D />
      <AboutSection />
      <Footer />
    </div>
  );
}
