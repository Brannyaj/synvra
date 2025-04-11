'use client';

import { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesSection from '@/components/ServicesSection';
import TechStackVisualizer from '@/components/TechStackVisualizer';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <ServicesSection />
      <TechStackVisualizer />
      <PortfolioSection />
      <ContactSection />
    </PageWrapper>
  );
}
