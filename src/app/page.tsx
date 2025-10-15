"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "modern office workspace - Photo by Jakub Zerdzicki" },
  { id: "about-image", url: "https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Business team having a casual meeting on a rooftop terrace with a cityscape view." },
  { id: "metric-image", url: "https://images.pexels.com/photos/5561914/pexels-photo-5561914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of financial graphs and digital tablet highlighting 2020 stock market crash." }
];

const Home = () => {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="/brand/logo.svg"
          brandName="My SaaS"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to My SaaS"
            description="Discover how we can help your business thrive."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[{ text: "Get Started", href: "#contact" }]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovation", description: "We bring innovative solutions." },
              { title: "Support", description: "24/7 customer support." },
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="metric" data-section="metric" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <MetricCardTwo
            metrics={[
              { id: "1", value: "98%", description: "Customer Satisfaction" },
              { id: "2", value: "24/7", description: "Support Availability" },
            ]}
            title="Our Achievements"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter."
            imageSrc={assetMap.find(a => a.id === "metric-image")?.url}
            mediaPosition="left"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Contact", href: "#contact" }] },
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;