"use client";

import { Lightbulb, Accessibility, Cable, TestTube2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { IoLogoGithub } from "react-icons/io";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiReactquery,
  SiZod,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import Image from "next/image";

export function SkillSection() {
  const iconSize = 20;

  const skillCategories = [
    {
      category: "Frontend Core",
      accent: "from-blue-500 to-indigo-600",
      bgGradient: "bg-gradient-to-r from-blue-500/10 to-indigo-600/10",
      borderColor: "border-blue-500/20",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript color="#F7DF1E" size={iconSize} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" size={iconSize} />,
        },
        {
          name: "React 19",
          icon: <FaReact color="#61dafb" size={iconSize} />,
        },
        {
          name: "Next.js 15",
          icon: <SiNextdotjs color="#FFFFFF" size={iconSize} />,
        },
      ],
    },
    {
      category: "UI & State Management",
      accent: "from-purple-500 to-pink-600",
      bgGradient: "bg-gradient-to-r from-purple-500/10 to-pink-600/10",
      borderColor: "border-purple-500/20",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss color="#38bdf8" size={iconSize} />,
        },
        {
          name: "shadcn/ui",
          icon: (
            <Image
              src="/shadcn-ui.png"
              alt="shadcn"
              height={iconSize}
              width={iconSize}
              style={{ filter: "invert(1)" }}
            />
          ),
        },
        {
          name: "Zustand",
          icon: <GiBearFace color="#FF6B35" size={iconSize} />,
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux color="#764ABC" size={iconSize} />,
        },
        {
          name: "Accessibility (A11y)",
          icon: (
            <Accessibility
              className="text-pink-600 dark:text-pink-400"
              size={iconSize}
              width={iconSize}
              height={iconSize}
            />
          ),
        },
      ],
    },
    {
      category: "Backend & Data",
      accent: "from-emerald-500 to-teal-600",
      bgGradient: "bg-gradient-to-r from-emerald-500/10 to-teal-600/10",
      borderColor: "border-emerald-500/20",
      skills: [
        {
          name: "Supabase",
          icon: <SiSupabase color="#3ecf8e" size={iconSize} />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql color="#336791" size={iconSize} />,
        },
        {
          name: "TanStack Query",
          icon: <SiReactquery color="#FF4154" size={iconSize} />,
        },
        {
          name: "REST APIs",
          icon: (
            <Cable
              className="text-teal-600 dark:text-emerald-400"
              size={iconSize}
              width={iconSize}
              height={iconSize}
            />
          ),
        },
      ],
    },
    {
      category: "Tooling & Validation",
      accent: "from-slate-500 to-gray-600",
      bgGradient: "bg-gradient-to-r from-slate-500/10 to-gray-600/10",
      borderColor: "border-slate-500/20",
      skills: [
        {
          name: "Git & GitHub",
          icon: <IoLogoGithub color="#FFFFFF" size={iconSize} />,
        },
        {
          name: "React Hook Form",
          icon: <FaReact color="#EC5990" size={iconSize} />,
        },
        {
          name: "Zod",
          icon: <SiZod color="#3E63DD" size={iconSize} />,
        },
        {
          name: "Jest",
          icon: (
            <TestTube2
              className="text-gray-600 dark:text-slate-300"
              size={iconSize}
              width={iconSize}
              height={iconSize}
            />
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Badge variant="outline" className="shimmer-badge w-fit">
          <Lightbulb className="w-4 h-4" />
          Technische Vaardigheden
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Mijn Toolkit</h2>
          <p className="text-muted-foreground text-base">
            De technologieën en principes waarmee ik waarde creëer en robuuste
            applicaties bouw.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {skillCategories.map((category) => (
          <div key={category.category} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.accent}`}
              />
              <h3 className="text-lg font-semibold text-foreground">
                {category.category}
              </h3>
              <div
                className={`flex-1 h-px bg-gradient-to-r ${category.accent} opacity-30`}
              />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group/skill flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-md ${category.borderColor} ${category.bgGradient} hover:bg-opacity-80 backdrop-blur-sm`}
                  style={{ position: "relative" }}
                >
                  <div
                    className="group-hover/skill:scale-110 transition-transform duration-300 flex items-center justify-center"
                    style={{
                      width: iconSize,
                      height: iconSize,
                      minWidth: iconSize,
                      minHeight: iconSize,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm text-foreground whitespace-nowrap">
                    {skill.name}
                  </span>
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.accent} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 -z-10`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
