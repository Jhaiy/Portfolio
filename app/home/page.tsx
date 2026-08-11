import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { ArrowDown } from "lucide-react";
import HomeParallax from "../../components/home-parallax";

export default function Page() {
  return (
    <HomeParallax>
      <Hero />
      <div className="flex flex-row items-center gap-3 animate-bounce">
        <p className="text-muted-foreground text-xs">Scroll down to explore</p>
        <ArrowDown className="text-muted-foreground" size={15} />
      </div>
      <hr className="border-t"></hr>
      <section id="about" className="scroll-mt-28">
        <About />
      </section>
      <hr className="border-t"></hr>
      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>
      <hr className="border-t"></hr>
      <section id="certificates" className="scroll-mt-28">
        <Certificates />
      </section>
      <hr className="border-t"></hr>
      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
      <Footer />
    </HomeParallax>
  );
}
