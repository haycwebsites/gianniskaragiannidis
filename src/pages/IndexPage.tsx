// HAYC Pipeline: This file is overwritten during
// project creation with the client's home page
// HTML converted to JSX.
// Source: index.html body content from HTML template.

import { HomePageUiProvider } from '../home/home-page-ui';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchModal from '../sections/SearchModal';
import OffcanvasSidebar from '../sections/OffcanvasSidebar';
import HeroSlider from '../sections/HeroSlider';
import ServicesSection from '../sections/ServicesSection';
import AboutSection from '../sections/AboutSection';
import WorkingProcessSection from '../sections/WorkingProcessSection';
import ProjectsSection from '../sections/ProjectsSection';
import ConsultationSection from '../sections/ConsultationSection';
import BlogSection from '../sections/BlogSection';

export default function IndexPage() {
  return (
    <HomePageUiProvider>
      <Navbar />
      <SearchModal />
      <OffcanvasSidebar />
      <main>
        <section>
          <HeroSlider />
          <ServicesSection />
          <AboutSection />
          <WorkingProcessSection />
          <ProjectsSection />
          <ConsultationSection />
          <div className="cinkes_cta_area pt-120 pb-90" aria-hidden />
          <BlogSection />
        </section>
      </main>
      <Footer />
    </HomePageUiProvider>
  );
}
