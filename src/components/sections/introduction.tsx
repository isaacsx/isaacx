import { Background } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="relative min-h-screen flex items-center px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">
          Full stack developer
        </h2>
        <h1 className="text-5xl font-bold text-blue-400 mb-8">Isaacx</h1>
        <p className="text-gray-400 max-w-2xl text-lg md:text-xl">
          I specialize in building scalable and high-performance web
          applications using React, Next.js, Node.js, and TypeScript. Focused on
          delivering clean, maintainable code and intuitive user experiences, I
          excel in performance optimization and streamlined workflows. A
          problem-solver and team player, I bring efficiency and collaboration
          to every project.
        </p>
        <div className="flex gap-3 mt-8">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://myuser.lol/isaacx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 637 637"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.4"
                className="w-6 h-6 text-white-rotate-[20deg]"
              >
                <path d="M318.198 623.631C306.115 460.363 176.033 330.281 12.7653 318.198C176.033 306.115 306.115 176.033 318.198 12.7653C330.281 176.033 460.363 306.115 623.631 318.198C460.363 330.281 330.281 460.363 318.198 623.631Z"></path>
              </svg>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/isaacsx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <Background className="absolute top-0 right-0 w-1/2 h-full opacity-20" />
    </section>
  );
}
