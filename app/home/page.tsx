import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Certificates from "@/components/certificates";
import { ArrowDown } from "lucide-react";

export default function Page() {
  return (
    <div className="lg:m-45 sm:m-20 m-10 flex flex-col lg:gap-50 sm:gap-30 gap-30">
      <Hero />
      <div className="flex flex-row items-center gap-3 animate-bounce">
        <p className="text-muted-foreground text-xs">Scroll down to explore</p>
        <ArrowDown className="text-muted-foreground" size={15} />
      </div>
      <hr className="border-t"></hr>
      <About />
      <hr className="border-t"></hr>
      <Projects />
      <hr className="border-t"></hr>
      <Certificates />
    </div>
  );
}
