import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Benefits />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
