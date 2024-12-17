import { ScrollReveal } from "@/components/ui/scrollReveal";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <About />
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
    </main>
  );
}
