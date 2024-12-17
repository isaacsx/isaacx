import Introduction from "@/components/sections/introduction";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Introduction />
      <Skills />
      <Projects />
    </main>
  );
}
