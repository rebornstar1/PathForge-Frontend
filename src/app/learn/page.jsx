'use client'

import React, { useState } from 'react';
import { HeroSection } from './components/hero-section';
import { ModuleGrid } from './components/module-grid';
import { PersonalizedRecommendations } from './components/personalized-recommendations';
import { InsightsDashboard } from './components/insights-dashboard';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from 'lucide-react';

const LearningSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div 
      className={`min-h-screen transition-colors px-10 duration-300 ${
        isDarkMode 
          ? 'dark bg-gradient-to-r from-slate-800 via-gray-900 to-blue-900' 
          : 'bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100'
      }`}
    >
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <ModuleGrid />
        <PersonalizedRecommendations />
        <InsightsDashboard />
      </main>
    </div>
  );
};

export default LearningSection;
