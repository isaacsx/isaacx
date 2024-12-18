import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "MyUser.lol",
    description: "A single place to share your links, social media profiles, and a short bio, making it easy for others to connect with you.",
    image: "/myuser.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    demo: "https://myuser.lol",
  },
  {
    title: "Code rizz",
    description: "A playful way to connect using tech and AI references, adding a geeky charm to your conversations.",
    image: "/coderizz.png",
    tags: ["Next.js", "TypeScript", "AI"],
    github: "https://github.com/EddyerDevv/CodeRizz",
    demo: "https://coderizz.vercel.app",
  },
  {
    title: "Pixel Bot",
    description: "A bot with many features and customizable settings, all managed through an intuitive dashboard.",
    image: "/pixel.png",
    tags: ["Sapphire", "TypeScript", "PostgreSQL"],
    demo: "https://pxlbot.vercel.app",
  },
];

export default function Projects() {
  return (
      <section id="projects">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Projects
        </h2>
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-7xl mx-auto mb-10"
        >
          {projects.map((project, i) => (
              <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border border-gray-800"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                        >
                    {tag}
                  </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2"/>
                        Open
                      </a>
                    </Button>
                    {project.github && <Button variant="outline" size="sm" asChild>
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2"/>
                        Code
                      </a>
                    </Button>}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
}
