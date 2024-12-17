"use client";

import { useRef, useEffect } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiPrisma,
  SiDotnet, SiMongodb,
} from "react-icons/si";

import {
  Code,
  Lightbulb,
  Group,
  Settings,
  Zap,
  MessageCircle,
} from "lucide-react";

const SKILLS = [
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiDotnet, name: ".NET" },
  { icon: SiReact, name: "React" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
];

const features = [
  {
    icon: Code,
    title: "Full-Stack Developer",
    description:
      "Proficient in both front-end and back-end technologies, including React, Next.js, Node.js, and TypeScript. I build end-to-end solutions that are performant, scalable, and maintainable.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description:
      "A strategic and analytical approach to solving complex challenges. I enjoy breaking down problems, finding efficient solutions, and optimizing processes for long-term results.",
  },
  {
    icon: Group,
    title: "Technical Leadership",
    description:
      "Capable of guiding teams through project development, ensuring best practices, clean code, and meeting delivery timelines while maintaining high-quality standards.",
  },
  {
    icon: Settings,
    title: "DevOps Awareness",
    description:
      "Familiar with CI/CD pipelines, Docker, PM2, and Nginx configurations to streamline deployment workflows, automate processes, and ensure application stability.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Skilled in improving web performance through efficient coding, minimizing load times, and leveraging tools for profiling and monitoring to enhance user experiences.",
  },
  {
    icon: MessageCircle,
    title: "Effective Communicator",
    description:
      "Strong collaboration and communication skills, enabling seamless teamwork, clear documentation, and effective stakeholder engagement throughout the development lifecycle.",
  },
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const scroll = () => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollLeft += 1;
      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }
    };

    intervalRef.current = setInterval(scroll, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollLeft += 1;
      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }
    }, 30);
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Skills & Technologies
      </h2>
      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex overflow-x-hidden gap-16 py-8 mb-20"
      >
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center gap-4 min-w-[100px]"
          >
            <skill.icon className="w-12 h-12 text-gray-400 transition-all group-hover:text-blue-400 group-hover:scale-125" />
            <span className="group-hover:text-blue-400 text-sm text-gray-400">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
