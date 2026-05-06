import { Navbar } from "@/components/common/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { WhyHire } from "@/components/sections/WhyHire";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="relative">
      <h1 className="sr-only">
        Mohit Ghevariya — Mobile Engineer & Flutter Developer Portfolio
      </h1>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <WhyHire />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
