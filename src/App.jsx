import AboutSection from "./Components/AboutSection";
import ClientsSection from "./Components/ClientSection";
import ContactSection from "./Components/ContactSection";
import FAQSection from "./Components/Faq";
import FeaturedServices from "./Components/FeaturedServices";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header"; 
import Hero from "./Components/Hero";
import MoreFeatures from "./Components/MoreFeatures";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
import SubFeatures from "./Components/SubFeatures";
import Testimonials from "./Components/Testimonials";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
     <FeaturedServices />
      <AboutSection />
      <ClientsSection />
      <Features />
      <SubFeatures />
      <Services />
      <MoreFeatures />
      <Pricing />
      <FAQSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}
