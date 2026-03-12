import ApproachSection from "../components/landing/ApproachSection";
import AudienceSection from "../components/landing/AudienceSection";
import BeliefsSection from "../components/landing/BeliefsSection";
import ContextPhotoSection from "../components/landing/ContextPhotoSection";
import CTASection from "../components/landing/CTASection";
import DifferentialsSection from "../components/landing/DifferentialsSection";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import ManifestoSection from "../components/landing/ManifestoSection";
import Navbar from "../components/landing/Navbar";
import OriginSection from "../components/landing/OriginSection";
import PlatformGallerySection from "../components/landing/PlatformGallerySection";
import PrivacySection from "../components/landing/PrivacySection";
import SolutionsSection from "../components/landing/SolutionsSection";
import TeamSection from "../components/landing/TeamSection";


const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OriginSection />
        <BeliefsSection />
        <ContextPhotoSection />
        <ApproachSection />
        <SolutionsSection />
        <PlatformGallerySection />
        <AudienceSection />
        <DifferentialsSection />
        <PrivacySection />
        <TeamSection />
        <ManifestoSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
