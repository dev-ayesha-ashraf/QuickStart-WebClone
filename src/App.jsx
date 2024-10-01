import AboutSection from "./Components/AboutSection";
import ClientsSection from "./Components/ClientSection";
import Header from "./Components/Header"; // Check spelling here
import Hero from "./Components/Hero";
// import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Components/Services";

export default function App() {
  return (
    <div>
      <Header />
      {/* <ScrollToTop /> */}
      <Hero />
      <Services />
      <AboutSection />
      <ClientsSection />
    </div>
  )
}
