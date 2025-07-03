import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import HowItWorksSection from "../components/HowItWorksSection.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import CTASection from "../components/CTASection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

/**
 * Home page component that renders the main sections of the landing page.
 *
 * This component includes the following sections in order:
 * - Header
 * - HeroSection
 * - AboutSection
 * - HowItWorksSection
 * - ProductsSection
 * - CTASection
 * - TestimonialsSection
 * - ContactSection
 * - Footer
 *
 * @component
 * @returns {JSX.Element} The complete home page layout.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ProductsSection />
      <CTASection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
