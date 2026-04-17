import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutPageAbout from '../sections/AboutPageAbout';
import AboutPageExperience from '../sections/AboutPageExperience';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageAbout />
        <AboutPageExperience />
      </main>
      <Footer />
    </>
  );
}
