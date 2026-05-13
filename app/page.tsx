import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EditorialSection from "@/components/EditorialSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/layout/footer";
import InstagramSection from "@/components/InstagramSection";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <EditorialSection/>
      <InstagramSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
